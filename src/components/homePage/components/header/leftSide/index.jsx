import React, { Component } from 'react';
import { Row, Col } from 'antd';
import images from '../../../../../images/index'

class LeftSide extends Component {

  render(){
    return (
      <Col
        md={12}
        lg={12}
        sm={24}
        xs={24}
        className='left-side-header'
      >
        <Row>
          <Col
            lg = {{offset: 6, span: 10}}
            md = {{offset: 6, span: 10}}
            sm = {{offset: 4, span: 18}}
            xs = {{offset: 4, span: 18}}
          >
            <div className='avatar-container'>
              <div className='avatar-content'>
                <div className='avatar-image'>
                  <img src={images.meImage} className="rounded-circle" alt='me avatar' width={130} />
                </div>
                <div className='avatar-text'>
                  <h4>GEORGE STOUMPOS</h4>
                  <p>SOFTWARE ENGINEER</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    )
  }
}


export default LeftSide
