import { Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AppointmentsByDate.css';
import AppointmentsTable from './AppointmentsTable';

const AppointmentList = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([{
        "_id": {
          "$oid": "6564fd1d805268aeede1c59f"
        },
        "username": "Ruba",
        "phone": "5716357859",
        "email": "rubavignesh@vt.edu",
        "pet": "Dog",
        "age": "2",
        "weight": "34",
        "serviceType": "Grooming",
        "appointmentDate": "Mon Nov 27 2023",
        "appointmentTime": "10:00 AM",
        "doctor_id": "60a7c4b5a1c6a71b7c4b5a1c",
        "user_id": "6563f24601265027cfa6c689",
        "createdAt": {
          "$date": "2023-11-27T20:33:33.683Z"
        },
        "updatedAt": {
          "$date": "2023-11-27T20:33:33.683Z"
        },
        "__v": 0
      }]);
    // Uncomment the lines below when you have the loggedInUser context available
    // const { loggedInUser } = useContext(UserContext);

    const handleAppointmentDate = (date) => {
        setSelectedDate(date);
    }

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentsByDate', {
    //         method: 'POST',
    //         headers: { 'Content-type': 'application/json' },
    //         body: JSON.stringify({ date: selectedDate.toDateString(), email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setAppointments(data))
    // }, [selectedDate])

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
                <h1 style={{ marginBottom: '5rem', marginLeft: '6rem', color: "rgb(5, 99, 141)", fontFamily: "initial"  }}>Appointment Calendar</h1>
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
                <h2 style={{color: "rgb(5, 99, 141)", fontFamily: "initial"}}>Total Appointments: {appointments.length}</h2>
                <h3 style={{color: "rgb(5, 99, 141)", fontFamily: "initial"}}>{selectedDate.toDateString()}</h3>
                </div>
                {
                    appointments.length === 0
                        ? <Typography variant="body2" align="center">There are no appointments on this date</Typography>
                        : <AppointmentsTable appointments={appointments}></AppointmentsTable>
                }
            </Grid>
        </Grid>
    );
};

export default AppointmentList;
