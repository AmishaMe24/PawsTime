import React from 'react';
import Header from '../../SharedFolders/Header/Header';
import OurDoctors from '../OurDoctors/OurDoctors';
import Services from '../Services/Services';

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