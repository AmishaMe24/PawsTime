import { Backdrop, Button, Fade, makeStyles, Modal } from '@material-ui/core';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../App';
import swal from 'sweetalert';
import { useAuthContext } from '../../../hooks/useAuthContext';

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


const BookingFormModal = ({ openModal, handleModalClose, title, time, selectedDate }) => {
    const classes = useStyles();

    const history = useNavigate();

    const { setAppointment } = useContext(UserContext);
    const { user } = useAuthContext();

    // Update appointment state from input form data
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = async data => {
        const updatedFromData = {
            ...data,
            serviceType: title,
            appointmentTime: time,
            appointmentDate: selectedDate.toDateString(),
            user_id: '60a7c4b5a1c6a71b7c4b5a1c',
            doctor_id: '60a7c4b5a1c6a71b7c4b5a1c',
        }

        const response = await fetch('http://localhost:4000/api/appointments', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedFromData),
        });
        const json = await response.json();

        if (!response.ok) {
        }
        if (response.ok) {
            setAppointment(updatedFromData);
            handleModalClose();
            swal({
                icon: 'success',
                text: 'Successfully Appointment Submitted',
                timer: 23
            })

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
                    <h2
                        id="transition-modal-title"
                        style={{
                            color: '#1CC7C1',
                            textAlign: 'center'
                        }}
                    >
                        {title}
                    </h2>
                    <form
                        className="contact-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        {/* <input
                            disabled
                            name="time"
                            type="text"
                            ref={register({ required: true })}
                            placeholder="Visiting Hour"
                            defaultValue={visitngHour}
                        />
                        {
                            errors.time
                            && <span className="error">Visiting Hour is required</span>
                        } */}
                        <p style={{ textAlign: 'center' }}>
                            Your appointment on
                            <strong> {time}</strong>
                            <br />
                            at
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
                        {/* <input
                            disabled
                            name="date"
                            type="text"
                            ref={register({ required: true })}
                            placeholder="mm/dd/yyyy*"
                            defaultValue={selectedDate.toDateString()}
                        />
                        {
                            errors.date
                            && <span className="error">Date is required</span>
                        } */}
                        <br />
                        <Button
                            type="submit"
                            variant="contained"
                            style={{
                                backgroundImage: 'linear-gradient(to right, #16D39D, #10CFE7)',
                                color: 'white',
                                width: 'fit-content',
                                textAlign: 'center',
                                marginLeft: 'auto'
                            }}
                        >
                            SEND
                        </Button>
                    </form>
                </div>
            </Fade>
        </Modal>
    );
};

export default BookingFormModal;