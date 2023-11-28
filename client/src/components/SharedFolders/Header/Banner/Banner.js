import React from 'react';
import Calendar from 'react-calendar';
import { makeStyles } from '@material-ui/core/styles';
import bannerImg from '../../../images/happy-dog1.webp'
import Grid from '@material-ui/core/Grid';
import { Button, Container } from '@material-ui/core';
import { useNavigate, useLocation } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import { useAuthContext } from '../../../../hooks/useAuthContext.js';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    bannerArea: {
        marginBottom: '10rem',
        paddingTop: '5rem'
    }
}));

const Banner = ({ selectedDate, handleAppointmentDate }) => {
    const classes = useStyles();
    const history = useNavigate();
    const path = useLocation().pathname;
    const user = useAuthContext();

    const handleAppointmentBtn = () => {
        history('/appointment');
    }

    return (
        <Container>
            <div className={classes.root}>
                <Grid className={classes.bannerArea} container spacing={3}>
{
                        path === '/appointment'
                        && <Grid item xs={12} md={5}>
                            <h1 style={{marginBottom: '5rem'}}>Appointment</h1>
                            <div>
                                <Calendar
                                    onChange={handleAppointmentDate}
                                    value={selectedDate}
                                />
                            </div>
                        </Grid>
                    }
                    {
                        path !== '/appointment'
                        && <Grid item md={5}>
                            <h2 style={{ color: '#05638d', marginBottom: '1.5rem', fontFamily: 'initial', fontSize: "45px", textAlign: "left" }}>Your Pet's health and happiness <br></br>all under one roof!</h2>
                            {user && !user.isAdmin && (
                                <Button
                                    variant="contained"
                                    style={{
                                        fontFace: 'bold',
                                        backgroundImage: 'linear-gradient(to right, #05638d, #05638d)',
                                        color: 'white',
                                        fontSize: '18px'
                                    }}
                                    onClick={handleAppointmentBtn}
                                >
                                    <b>BOOK YOUR APPOINTMENT</b>
                                </Button>
                            )}
                        </Grid>
                    }

                    <Grid item md={7}>
                        <img style={{ width: '100%' }} src={bannerImg} alt="" />
                    </Grid>
                </Grid>
            </div>
            {/* {
                path !== '/appointment'
                && <BusinessInfoCard />
            } */}
        </Container>
    );
};

export default Banner;
