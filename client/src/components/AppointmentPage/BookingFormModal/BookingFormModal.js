import { Backdrop, Button, Fade, makeStyles, Modal } from '@material-ui/core';
import React, { useContext, useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { useAuthContext } from '../../../hooks/useAuthContext.js';
import { useAppointmentContext } from '../../../hooks/useAppointmentContext.js';
import "../../HomePage/ContactUs/ContactUs.css";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        minWidth: '20rem',
        backgroundColor: theme.palette.background.paper,
        border: 'none',
        borderRadius: '1rem',
        padding: theme.spacing(2, 4, 3),
    },
}));


const BookingFormModal = ({ openModal, handleModalClose, serviceType, selectedDate }) => {
    const classes = useStyles();

    const history = useNavigate();

    const { user } = useAuthContext();
    const { dispatch } = useAppointmentContext();
    const [error, setError] = useState(null);

    const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
    const [loading, setLoading] = useState(true);

    // Update appointment state from input form data
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm();

    // Reset the form when the modal is opened
    useEffect(() => {
        reset();
    }, [openModal, reset]);

    useEffect(() => {
        const fetchAvailableTimeSLots = async () => {
            try {
                setLoading(true);

                // Perform the API request to get available appointments based on selectedDate and service type
                const response = await fetch(`http://localhost:4000/api/appointments/getAvailableTimeSlots`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json',
                            'Authorization': `Bearer ${user?.token}`
                        },
                        body: JSON.stringify({ appointmentDate: selectedDate.toDateString(), serviceType: serviceType })
                    })
                const timeSlots = await response.json();

                if (!response.ok) {
                    setLoading(false);
                    setError(timeSlots.error);
                }
                if (response.ok) {
                    setAvailableTimeSlots(timeSlots);
                }
            } catch (error) {
                setError('Error fetching available time slots:' + error.message);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        };

        if (serviceType && selectedDate && user && openModal) {
            fetchAvailableTimeSLots();
        }
    }, [selectedDate, serviceType, user, openModal]);

    const onSubmit = async data => {

        if (!user) {
            setError('You must be logged in');
            return;
        }

        const updatedFromData = {
            ...data,
            serviceType: serviceType,
            appointmentDate: selectedDate.toDateString(),
            doctor: serviceType === 'Veterinary' ? 'Dr. Caudi' : 'Dr. Mostafa',
        }

        const response = await fetch('http://localhost:4000/api/appointments', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(updatedFromData),
        });
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setError(null);
            handleModalClose();
            swal({
                icon: 'success',
                text: 'Successfully Booked Appointment',
                timer: 2000
            });
            dispatch({ type: 'CREATE_APPOINTMENT', payload: json });
            history('/dashboard');
        }
    };

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={openModal}
            onClose={handleModalClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openModal}>
                <div className={classes.paper}>
                    {user ? (
                        // Render the form only when user is available
                        <>
                            <h2
                                id="transition-modal-title"
                                style={{
                                    color: '#05638d',
                                    textAlign: 'center'
                                }}
                            >
                                {serviceType}
                            </h2>
                            <form
                                className="contact-form"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <p style={{ textAlign: 'center' }}>
                                    Book Appointment on
                                    <strong> {selectedDate.toDateString()}
                                    </strong>
                                </p>
                                <input type="text" {...register("username", { required: true })} placeholder="Your Name" />
                                {
                                    errors.username
                                    && <span className="error">Name is required</span>
                                }
                                <input type="text" {...register("email", { required: true })} placeholder="Email" />
                                {
                                    errors.email
                                    && <span className="error">Email is required</span>
                                }
                                <input type="text" {...register("phone", { required: true })} placeholder="Phone Number" />
                                {
                                    errors.phone
                                    && <span className="error">Phone number is required</span>
                                }
                                <select {...register("pet", { required: true })}>
                                    <option disabled={true} value="Not set">Select Pet</option>
                                    <option value="Dog">Dog</option>
                                    <option value="Cat">Cat</option>
                                    <option value="Not set">Other</option>
                                </select>
                                {
                                    errors.pet
                                    && <span className="error">Your pet type is required</span>
                                }
                                <input {...register("age", { required: true })} placeholder="Pet's Age" type="number" />
                                {
                                    errors.age
                                    && <span className="error">Pet's age is required</span>
                                }
                                <input {...register("weight", { required: true })} placeholder="Weight" type="number" />
                                {
                                    errors.weight
                                    && <span className="error">Pet's weight is required</span>
                                }
                                <select {...register("appointmentTime", { required: true })}>
                                    <option disabled={true} value="">Select Time Slot</option>
                                    {availableTimeSlots.map((timeSlot, index) => (
                                        <option key={index} value={timeSlot}>
                                            {timeSlot}
                                        </option>
                                    ))}
                                </select>
                                {errors.appointmentTime && (
                                    <span className="error">Please select a time slot</span>
                                )}

                                <br />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    style={{
                                        backgroundImage: 'linear-gradient(to right, #05638d, #05638d)',
                                        color: 'white',
                                        width: 'fit-content',
                                        textAlign: 'center',
                                        marginLeft: 'auto'
                                    }}
                                >
                                    Book
                                </Button>
                                {error && <div className="error">{error}</div>}
                            </form>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </Fade>
        </Modal>
    );
};

export default BookingFormModal;