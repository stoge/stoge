import React, { Component } from 'react';
import Typist from 'react-typist'

class AnimetedText extends Component {

  constructor (props) {
    super(props)
    this.state = {
      typing: true,
      typingSpeed: 1000
    }
  }

  done = () =>  {
    this.setState({ typing: false }, () => {
      this.setState({ typing: true })
    });
  }

  render(){
    const { typingSpeed } = this.state
    return (
      <div className='animated-content'>
        {this.state.typing ? <Typist onTypingDone={this.done} className='animated-text'>
          <span>I like React</span>
          <Typist.Backspace count={5} delay={typingSpeed} />
          <span>MobX</span>
          <Typist.Backspace count={4} delay={typingSpeed} />
          <span>Redux</span>
          <Typist.Backspace count={5} delay={typingSpeed} />
          <span>Nodejs</span>
          <Typist.Backspace count={6} delay={typingSpeed} />
          <span>ES6</span>
          <Typist.Backspace count={3} delay={typingSpeed} />
          <span>SCSS</span>
          <Typist.Backspace count={4} delay={typingSpeed} />
          <span>Ruby</span>
          <Typist.Backspace count={4} delay={typingSpeed} />
          <span>Ruby on Rails</span>
          <Typist.Backspace count={13} delay={typingSpeed} />
          <span>Docker</span>
          <Typist.Backspace count={6} delay={typingSpeed} />
          <span>Raspberry Pi</span>
        </Typist> : ''}
      </div>
    )
  }
}


export default AnimetedText
