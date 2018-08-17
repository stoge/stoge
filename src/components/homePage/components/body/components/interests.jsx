import React, { Component } from 'react';
import { Divider, Row, Col } from 'antd'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faLaptopCode, faDatabase, faFlask, faCogs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faEnvelope, faKey, faLaptopCode, faDatabase, faFlask, faCogs  );

class InterestsComponent extends Component {

  render(){
    return (
      <div className="interests-container">
        <Row gutter={24}>
          <Col
            lg={{span: 6}}
            className='interest-item-container'
          >
            <div className="flipping-card-container">
              <div className="flipping-card">
                <div className="side">
                  <FontAwesomeIcon
                    icon="laptop-code"
                    size='5x'
                    className='interest-icon'
                  />
                  <Divider/>
                  <span className='interest-text'>Frontend</span>
                </div>
                <div className="side back">
                  <p>
                    I enjoy creating web apps using React(JS), either with Mobx or Redux.
                  </p>
                  <p>
                    I do not settle for pre-made staff, so I prefer to give my personal touch to whatever I make using SCSS.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col
            lg={{span: 6}}
            className='interest-item-container'
          >
            <div className="flipping-card-container">
              <div className="flipping-card">
                <div className="side">
                  <FontAwesomeIcon
                    icon="database"
                    size='5x'
                    style={{color:'#F8C778'}}
                  />
                  <Divider/>
                  <span className='interest-text'>Backend</span>
                </div>
                <div className="side back">
                  <p>
                    Being exposed to the JS world, its only natural to be involved with Node(JS) and especially Express(JS).
                  </p>
                  <p>
                    Last but not least, Ruby on Rails has been "a love at first sight" till this very day.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col
            lg={{span: 6}}
            className='interest-item-container'
          >
            <div className="flipping-card-container">
              <div className="flipping-card">
                <div className="side">
                  <FontAwesomeIcon
                    icon="cogs"
                    size='5x'
                    style={{color:'#F8C778'}}
                  />
                  <Divider/>
                  <span className='interest-text'>Maker</span>
                </div>
                <div className="side back">
                  <p>
                    Humans do two things that make us unique from all other animals; we use tools and we tell stories.
                  </p>
                  <p>
                    And when you make something, you’re doing both at once.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col
            lg={{span: 6}}
            className='interest-item-container'
          >
            <div className="flipping-card-container">
              <div className="flipping-card">
                <div className="side">
                  <FontAwesomeIcon
                    icon="flask"
                    size='5x'
                    style={{color:'#F8C778'}}
                  />
                  <Divider/>
                  <span className='interest-text'>Curious</span>
                </div>
                <div className="side back">
                  <p>
                    Being a fervent supporter and admirer of the Open Source movement I am always eager to experiment ,learn and share new knowledge.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default InterestsComponent
