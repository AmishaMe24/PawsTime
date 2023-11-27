import React from 'react';
import Footer from '../../SharedFolders/Footer/Footer';
import Header from '../../SharedFolders/Header/Header';
import MakeAppointment from '../../HomePage/MakeAppointment/MakeAppointment';
import ContactUs from '../ContactUs/ContactUs';
import OurDoctors from '../OurDoctors/OurDoctors';
import ReviewsCard from '../Testimonials/ReviewsCard';
import Services from '../Services/Services';
import Blogs from '../Blogs/Blogs';

import './Home.css';

const Home = () => {
    return (
        <>
            <Header />
            <Services />
            {/* <FeaturedService /> */}
            {/* <MakeAppointment /> */}
            {/* <ReviewsCard /> */}
            {/* <Blogs /> */}
            <OurDoctors />
            {/* <ContactUs /> */}
            {/* <Footer /> */}
        </>
    );
};

export default Home;