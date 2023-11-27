import { Button, Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import BookingFormModal from '../BookingFormModal/BookingFormModal';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        minHeight: 250
    }
}));

const BookingCard = ({ selectedDate, list: {title, time, space} }) => {
    const classes = useStyles();

    const [openModal, setOpenModal] = useState(false);

    const handleModalOpen = () => {
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };

    return (
        <Grid item md={4}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h4" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="h6" component="h4">
                        {time}
                    </Typography>
                    <Typography variant="body2" component="h4">
                        {space} spaces available
                    </Typography>
                </CardContent>
                <Button
                    onClick={handleModalOpen}
                    variant="contained"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #16D39D, #10CFE7)',
                        color: 'white'
                    }}
                >
                    Book Appointment
            </Button>
                <BookingFormModal
                    openModal={openModal}
                    handleModalClose={handleModalClose}
                    title={title}
                    time={time}
                    selectedDate={selectedDate}
                />  
            </Card>
        </Grid>
    );
};

export default BookingCard;