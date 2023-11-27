import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import servicesInfoData from '../../DataStore/ServicesInfoData';
// #05638d

const Services = () => {
  return (
    <Container align="center" style={{ marginTop: '5rem', width: '85%' }}>
      <h4 style={{ color: '#05638d',fontFamily:"initial",fontWeight: 'bold',fontSize:"45px" }}>Services</h4>
      {/* <h2 style={{ color: '#F0D153', fontWeight: 'bold' }}>Services We Provide</h2> */}
        <Grid container justifyContent="center" spacing={4}>
          {servicesInfoData.map((service, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={6} lg={6}>
              <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img style={{ width: '150px' }} src={service.img} alt="" />
                <h3 style={{ color: '#05638d', margin: '1.5rem',fontFamily:"initial",fontFace:"bold",fontSize:"23px" }}>{service.name}</h3>
                <p>{service.description}</p>
              </Box>
            </Grid>
          ))}
        </Grid>
    </Container>
  );
};

export default Services;
