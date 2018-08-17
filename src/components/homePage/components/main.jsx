import React, { Component } from 'react';
import { Row, Col } from 'antd';
import LeftSide from './header/leftSide/index'
import RightSide from './header/rightSide/index'
import images from '../../../images/index'
import './styles.scss'


class HeaderContent extends Component {

    render(){
        return (
            <div className="header-container"
              style={{
                  background: `url(${images.noiseDots}) repeat, url(${images.headerBackground}) no-repeat`,
                  backgroundSize: 'auto ,cover',
                  backgroundPosition: 'left top, center'
              }}
            >
              <Row>
                <LeftSide/>
                <RightSide/>
              </Row>
            </div>
        )
    }
}

export default HeaderContent
