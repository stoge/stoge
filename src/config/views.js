import React from 'react'

import { Route } from 'mobx-router';

import Home from '../components/homePage/home'
// import ServicesPage from '../components/servicesPage/ServicesPage'

const views = {
    home: new Route({
        path: '/',
        component: <Home/>
    }),
    // services: new Route({
    //     path: '/services',
    //     component: <ServicesPage/>
    // })
};

export default views;
