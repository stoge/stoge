import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './styles.scss'


class FooterContent extends Component {

  render(){
    return (
      <div className="footer-container">
        <footer className="footer-basic-centered">

          <p className="footer-links">
            <a href="#">Home</a>
            ·
            <a href="#">Blog</a>
          </p>

          <p className="footer-company-name">George Stoumpos &copy; 2018</p>

        </footer>
      </div>
    )
  }
}

export default FooterContent
