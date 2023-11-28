import { AppBar, Container, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        background: 'transparent',
        boxShadow: 'none',
        padding: '0.001rem'
    },
    title: {
        marginLeft: 'auto',
        '& h6': {
            '& a': {
                fontSize: '1rem',
                marginRight: theme.spacing(5),
                color: 'white',
                '&:hover': {
                    textDecoration: 'none',
                    cursor: 'pointer'
                 },
            }
        }
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <Container className="header-link">
            <AppBar className={classes.root} position="static">
                <Toolbar className={classes.title}>
                    <Typography variant="h6" >
                        <Link to="/">Home</Link>
                    </Typography>
                    {/* <Typography variant="h6" >
                        <Link to="/dashboard/appointments">Patient</Link>
                    </Typography> */}
                    <Typography variant="h6" >
                        <Link to="/dashboard">Dashboard</Link>
                    </Typography>
                    <Typography variant="h6" >
                        <Link to="/dashboard">Appointments</Link>
                    </Typography>
                    {/* <Typography variant="h6" >
                        <Link to="/">Blog</Link>
                    </Typography> */}
                    {/* <Typography variant="h6" >
                        <Link to="/contact-us">Contact Us</Link>
                    </Typography> */}
                </Toolbar>
            </AppBar>
        </Container>
    );
};

export default Header;