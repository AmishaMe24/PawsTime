import { Container, Grid } from '@material-ui/core';
import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
import servicesInfoData from '../../DataStore/ServicesInfoData';

const AvailableAppointments = ({ selectedDate }) => {

    return (
        <Container style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#05638d', marginTop: '5rem',fontFamily:"initial",fontWeight:"bold",fontSize:"30px" }}>Book your appointment for {selectedDate.toDateString()} </h2>
            <Grid container spacing={2} style={{ gap:"250px", margin: '5rem' }}>
                {   
                    servicesInfoData.map(list =>
                        <BookingCard
                            key={list.id}
                            selectedDate={selectedDate}
                            serviceType={list.name}
                            style={{ margin: '300px',fontFamily:"initial",color:"#05638d" }}
                        />
                    )
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;