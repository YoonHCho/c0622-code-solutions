import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    let msg;
    if (this.state.isClicked) {
      msg = 'Thanks!';
    } else {
      msg = 'Click Me!';
    }
    return (
      <button onClick={this.handleClick}>
        { msg }
      </button>
    );
  }

  // render() {
  //   return (
  //     <button onClick={this.handleClick}>
  //       {this.state.isClicked ? 'Thanks!' : 'Click Me!'}
  //     </button>
  //   );
  // }

}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<CustomButton />);
