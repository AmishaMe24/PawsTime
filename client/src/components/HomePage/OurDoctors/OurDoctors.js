import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Box, Container, IconButton } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import doctorsInfo from '../../DataStore/DoctorsInfo';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        textAlign: 'center',
        boxShadow: 'none'
    },
});

const OurDoctors = () => {
    const classes = useStyles();
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        // Fetch data or set the data directly from the import
        setDoctors(doctorsInfo);
    }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount


    // useEffect(() => {
    //     fetch('http://localhost:5000/doctors')
    //         .then(res => res.json())
    //         .then(data => setDoctors(data))
    // }, []);
    // doctors[0] && console.log(doctors[0].image)
    return (
        <Container align="center">
            <h4 style={{ color: '#05638d', fontWeight: 'bold', margin: '3rem',fontFamily:"initial",fontSize:"30px" }}>Our Team</h4>
            <Grid container spacing={3} justifyContent="center">
                {doctors.map((doctor, idx) => (
                    <Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
                        <Box p={1}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt={doctor.name}
                                        height="100%"
                                        image={doctor.img}
                                        title={doctor.name}
                                    />
                                    <CardContent>
                                        <Typography variant="h5" component="h1">
                                            {doctor.name}
                                        </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="h4">
                                            <PhoneIcon />
                                            {doctor.phone}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default OurDoctors;