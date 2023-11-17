import React from 'react'

import {BrowserRouter as Router,  Routes, Route, Navigate } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './screens/Home'
import Providers from './screens/Providers'
import Faq from './screens/Faq'
import AboutProject from './screens/AboutProject'
import Card from './screens/Card'

require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class Main extends React.Component {

    render(){

        return(
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/providers" element={<Providers />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/aboutProject" element={<AboutProject />} />
                    <Route path="/card" element={<Card />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>

        )
    }
}
