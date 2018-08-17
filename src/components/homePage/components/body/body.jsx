import React, { Component } from 'react';
import QuoteComponent from './components/quote'
import InterestsComponent from './components/interests'
import { Row, Col } from 'antd'

import './styles.scss'


class BodyContent extends Component {

  render(){
    return (
      <div className="body-container">
        <div className="container">
          <QuoteComponent/>
          <Row>
            <Col span={24}>
              <div className="about-container">
                <InterestsComponent/>
              </div>
            </Col>
            <Col span={12}>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default BodyContent
