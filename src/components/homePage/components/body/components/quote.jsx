import React, { Component } from 'react';
import { Row, Col } from 'antd'

class QuoteComponent extends Component {

  render(){
    return (
      <Row>
        <Col span={20} offset={2}>
          <div className="quote-container">
            <blockquote className="quote">
              “You can design and create, and build the most wonderful place in the world. But it takes people to make the dream a reality.
              <footer>Walt Disney</footer>
            </blockquote>
          </div>
        </Col>
      </Row>
    )
  }
}

export default QuoteComponent
