import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      count: 0,
      timeId: undefined
    };
    this.startWatch = this.startWatch.bind(this);
    this.pauseWatch = this.pauseWatch.bind(this);
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({ count: this.state.count + 1 });
  }

  startWatch() {
    if (!this.state.start) {
      this.setState({ start: true });
      this.timeId = setInterval(this.tick, 1000);
    }
  }

  pauseWatch(e) {
    if (!this.state.start && e.target.nodeName === 'BUTTON') {
      this.setState({ count: 0 });
    }
    if (this.state.start && e.target.nodeName === 'I') {
      this.setState({ start: false });
      clearInterval(this.timeId);
    }
  }

  render() {
    return (

      <div className='row'>
        <div className='col-100'>
          <button onClick={ this.pauseWatch }>{ this.state.count }</button>
        </div>
        <div className='col-100'>
          <i onClick={ this.state.start ? this.pauseWatch : this.startWatch} className={ !this.state.start ? 'fa-solid fa-play' : 'fa-solid fa-pause'}></i>
        </div>
      </div>

    );
  }
}

export default StopWatch;
