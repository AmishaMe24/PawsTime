import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Button } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    list: {
        '& ul': {
            listStyle: 'none',
            marginLeft: '-2.5rem'
        },
        '& h3': {
            // color: '#1CC7C1',
            color: "white",
            fontWeight: 'bold', 
            marginBottom: '2rem',
            fontFamily:'initial'
        },
        '& svg': {
            fontSize: '3rem',
            border: '1px solid #1CC7C1',
            marginRight: '5px',
            borderRadius: '5rem',
            padding: '5px',
            color: 'white',
            cursor: 'pointer',
            '&:hover': {
                color: 'white',
                backgroundColor: '#1CC7C1'
            }
        }
    }
}));

const FooterTop = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid className={classes.list} item xs={6} sm={3}>
                    <h3>About Us</h3>
                    <ul>
                        <li>Our Story</li>
                        <li>Meet the Team</li>
                        <li>Testimonials</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                    </ul>
                </Grid>
                <Grid className={classes.list} item xs={6} sm={3}>
                    <h3>Services</h3>
                    <ul>
                        <li>Professional Grooming</li>
                        <li>Veterinary Care</li>
                        <li>Pet Boarding</li>
                        <li>Dog Training Classes</li>
                        <li>Pet Nutrition Consultations</li>
                        <li>Emergency Pet Care</li>
                        <li>Pet Adoption Events</li>
                    </ul>
                </Grid>
                <Grid className={classes.list} item xs={6} sm={3}>
                    <h3>Pet Care Tips</h3>
                    <ul>
                        <li>Choosing the Right Pet</li>
                        <li>Training and Behavior</li>
                        <li>Health and Wellness</li>
                        <li>Feeding Guidelines</li>
                        <li>Fun Activities for Pets</li>
                    </ul>
                </Grid>
                <Grid className={classes.list} item xs={6} sm={3}>
                    <h3>Our Location</h3>
                    <p>123 Pet Street, Cityville</p>
                    <FacebookIcon />
                    <TwitterIcon />
                    <LinkedInIcon />
                    <br /> <br />
                    <p>Contact Us</p>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{
                            backgroundImage: 'linear-gradient(to right, #F0D153, #05638d)',
                            color: 'white',
                        }}
                        type="tel"
                    >
                        +1234567890
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default FooterTop;
