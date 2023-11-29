import { Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AppointmentsByDate.css';
import AppointmentsTable from './AppointmentsTable';
import { useAuthContext } from '../../../hooks/useAuthContext.js';
import { baseUrl } from "../../../config.js";

const AppointmentList = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const { user } = useAuthContext();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleAppointmentDate = (date) => {
        setSelectedDate(date);
    }

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                setLoading(true);

                const response = await fetch(`${baseUrl}/api/appointments/appointmentByDate`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json',
                            'Authorization': `Bearer ${user?.token}`
                        },
                        body: JSON.stringify({ appointmentDate: selectedDate.toDateString() })
                    })
                const appointmentRes = await response.json();

                if (!response.ok) {
                    setLoading(false);
                    setError(appointmentRes.error);
                }
                if (response.ok) {
                    setAppointments(appointmentRes);
                }
            } catch (error) {
                setError('Error fetching available appointments:' + error.message);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        };

        if (selectedDate && user) {
            fetchAppointments();
        }
    }, [selectedDate, user]);

    return (
        <div>
            {user ? (
                <>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <h1 style={{ marginBottom: '5rem', marginLeft: '6rem', color: "rgb(5, 99, 141)", fontFamily: "initial" }}>Appointment Calendar</h1>
                            <div style={{ marginBottom: '5rem', marginLeft: '4rem' }}>
                                <Calendar
                                    onChange={handleAppointmentDate}
                                    value={selectedDate}
                                />
                                <br></br>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className="appointments-date-heading">
                                <h2 style={{ color: "rgb(5, 99, 141)", fontFamily: "initial" }}>Total Appointments: {appointments.length}</h2>
                                <h3 style={{ color: "rgb(5, 99, 141)", fontFamily: "initial" }}>{selectedDate.toDateString()}</h3>
                            </div>
                            {
                                appointments.length === 0
                                    ? <Typography variant="body2" align="center">There are no appointments on this date</Typography>
                                    : <AppointmentsTable appointments={appointments}></AppointmentsTable>
                            }
                        </Grid>
                    </Grid>
                    {error && <div className="error">{error}</div>}
                    {loading && <div className="loading">Loading...</div>}
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default AppointmentList;
