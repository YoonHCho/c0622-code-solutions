import React from 'react';
// import ReactDOM from 'react-dom/client';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.clickedButton = this.clickedButton.bind(this);
  }

  clickedButton() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    if (this.state.count >= 18) {
      return <button onClick={this.clickedButton} className="color-18">Hot Button</button>;
    }
    if (this.state.count >= 15) {
      return <button onClick={this.clickedButton} className="color-15">Hot Button</button>;
    }
    if (this.state.count >= 12) {
      return <button onClick={this.clickedButton} className="color-12">Hot Button</button>;
    }
    if (this.state.count >= 9) {
      return <button onClick={this.clickedButton} className="color-9">Hot Button</button>;
    }
    if (this.state.count >= 6) {
      return <button onClick={this.clickedButton} className="color-6">Hot Button</button>;
    }
    if (this.state.count >= 3) {
      return <button onClick={this.clickedButton} className="color-3">Hot Button</button>;
    }
    return (
      <button onClick={this.clickedButton}>
        Hot Button
      </button>
    );
  }
}

export default HotButton;
