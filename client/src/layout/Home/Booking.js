import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import BookForm from '../../components/BookingForm'
import Details from '../../components/Details';
import Footer from '../../components/Footer';

const Home = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    // eslint-disable-next-line
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const location = useLocation();
    // eslint-disable-next-line
    const currentPath = location.pathname;

    return (
        <div className=' min-h-screen bg-blue-950 w-full'>
            <Header />
            <Navbar />
            <BookForm />
            <Details />
            <Footer/>
        </div>
    );
};

export default Home;
