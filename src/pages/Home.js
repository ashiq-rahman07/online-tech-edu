import React, { Fragment } from 'react';
import AboutUs from '../components/About-us/AboutUs';
import ChooseUs from '../components/Choose-us/ChooseUs';

import Company from '../components/Company-section/Company';
import Features from '../components/Feature-section/Features';
import Footer from '../components/Footer/Footer';
import FreeCourse from '../components/Free-course-section/FreeCourse';
import Header from '../components/Header/Header';
import HeroSection from '../components/Hero-Section/HeroSection';
import Newsletter from '../components/Newsletter/Newsletter';
import Testimonials from '../components/Testimonial/Testimonials';
import Courses from './Course-section/Courses';

const Home = () => {
    return <Fragment>
        <Header/>
        <HeroSection></HeroSection>
        <Company></Company>
        <AboutUs></AboutUs>
        <Courses></Courses>
        <ChooseUs></ChooseUs>
        <Features></Features>
        <FreeCourse></FreeCourse>
        <Testimonials></Testimonials>
        <Newsletter></Newsletter>
        <Footer></Footer>
        
    </Fragment>
};

export default Home;