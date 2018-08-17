import React, { Component } from 'react';
import { Row, Col, Divider, Icon } from 'antd';
import AnimatedText from '../animatedText/animatexText'

class RightSide extends Component {

  render(){
    return (
      <Col
        md={12}
        lg={12}
        sm={24}
        xs={24}
        className='right-side-header'
      >
        <Row>
          <div className='summary-content'>
            <h4>Hello, I'm George</h4>
            <AnimatedText/>
          </div>
          <Divider dashed={true}/>
          <div className='information-content'>
            <h4>How to find me</h4>
            <div className='contact-links'>
              <span className='facebook-icon'><span className='hover-shadow'><Icon type="facebook" className='portfolio-contact-icon ' /></span></span>
              <span className='linkedIn-icon'><span className='hover-shadow'><Icon type="linkedin" className='portfolio-contact-icon ' /></span></span>
              <span className='github-icon'><span className='hover-shadow'><Icon type="github" className='portfolio-contact-icon ' /></span></span>
              <span className='email-icon'><span className='hover-shadow'><Icon type="mail" className='portfolio-contact-icon ' /></span></span>
            </div>
          </div>

        </Row>
        <Row>

        </Row>
      </Col>
    )
  }
}


export default RightSide
