import React, { Component } from 'react';

import HeaderContent from './components/main'
import BodyContent from './components/body/body'
import FooterContent from './components/footer/footer'
import './home.css'

class Home extends Component {

    render(){
        return (
            <div className="home-containter">
                <HeaderContent/>
                <BodyContent/>
                <FooterContent/>
            </div>
        )
    }
}

export default Home
