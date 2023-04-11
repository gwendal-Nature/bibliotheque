import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Countries from '../components/Books';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <Countries />
        </div>
    );
};

export default Home;