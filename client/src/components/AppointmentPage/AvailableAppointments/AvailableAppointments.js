import { Container, Grid } from '@material-ui/core';
import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
import servicesInfoData from '../../DataStore/ServicesInfoData';

const AvailableAppointments = ({ selectedDate }) => {

    return (
        <Container style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#05638d', marginTop: '5rem' }}>Available Appointments on {selectedDate.toDateString()} </h2>
            <Grid container spacing={1} style={{ margin: '5rem' }}>
                {
                    servicesInfoData.map(list =>
                        <BookingCard
                            key={list.id}
                            selectedDate={selectedDate}
                            serviceType={list.name}
                        />
                    )
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;