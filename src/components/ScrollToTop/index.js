import React from 'react';
import * as Feather from 'react-feather';
import './ScrollToTop.css';

class ScrollButton extends React.Component {  
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  
  render () {
      return (
        <button id='scrollBtn' onClick={() => {this.scrollToTop()}}>
          <Feather.ChevronUp />
        </button>
      )
   }
} 

class ScrollApp extends React.Component {
  render () {
    return (
      <div className="long">
        <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
      </div>
    )
  }
}

export default ScrollApp;