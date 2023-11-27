import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import servicesInfoData from '../../DataStore/ServicesInfoData';

const Services = () => {
  return (
    <Container align="center" style={{ marginTop: '5rem', width: '85%' }}>
      <h4 style={{ color: '#05638d' }}>OUR SERVICES</h4>
      <h2 style={{ color: '#203047', fontWeight: 'bold' }}>Services We Provide</h2>
      <Grid container justifyContent="center" spacing={4}>
        {servicesInfoData.map((service, idx) => (
          <Grid key={idx} item xs={12} sm={6} md={6} lg={6}>
            <Box p={4}>
              <img style={{ width: '150px' }} src={service.img} alt="" />
              <h3 style={{ color: '#203060', margin: '1.5rem' }}>{service.name}</h3>
              <p>{service.description}</p>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
