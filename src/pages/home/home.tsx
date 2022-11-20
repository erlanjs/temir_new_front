import React from 'react';

import ContactUs from "./contactUs";
import HomeHero from "./homeHero";
import SmartWay from './SmartWay';
import QrCode from './QrCode';
import ThreeNumber from './ThreeNumber';

const Home = () => {
    return (
        <>
            <HomeHero/>
            <ContactUs/>
            <SmartWay/>
            <QrCode/>
            <ThreeNumber/>
        </>
    );
};

export default Home;