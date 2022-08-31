import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.onOrOff = this.onOrOff.bind(this);
  }

  onOrOff() {
    if (this.state.isOn) {
      this.setState({
        isOn: false
      });
    } else {
      this.setState({
        isOn: true
      });
    }
  }

  render() {
    let onMain;
    let onCircle;
    if (this.state.isOn) {
      onMain = 'main-btn on';
      onCircle = 'circle-btn-on';
    } else {
      onMain = 'main-btn off';
      onCircle = 'circle-btn-off';
    }

    return (
      <div className="row justify-center">
        <div onClick={ this.onOrOff }>
          <button className={onMain}></button>
          <div>
            <button className={onCircle}></button>
          </div>
        </div >
        <h1>{this.state.isOn ? 'ON' : 'OFF'}</h1>
      </div>
    );
  }
}

export default ToggleSwitch;
