import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      intervalId: null
    };
    this.rightClick = this.rightClick.bind(this);
    this.leftClick = this.leftClick.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  componentDidMount() {
    this.setState({ intervalId: setInterval(this.rightClick, 3000) });
  }

  rightClick(e) {
    if (e) {
      clearInterval(this.state.intervalId);
      this.setState({ intervalId: setInterval(this.rightClick, 3000) });
    }
    if (this.state.index === this.props.image.length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: this.state.index + 1 });
    }
  }

  leftClick(e) {
    if (e) {
      clearInterval(this.state.intervalId);
      this.setState({ intervalId: setInterval(this.rightClick, 3000) });
    }
    if (this.state.index === 0) {
      this.setState({ index: this.props.image.length - 1 });
    } else {
      this.setState({ index: this.state.index - 1 });
    }
  }

  buttonClick(e) {
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: setInterval(this.rightClick, 3000) });
    this.setState({ index: Number(e.target.id) });
  }

  render() {
    return (
      <>
        <div className='container row'>
          <i className="fa-solid fa-chevron-left col-33" onClick={this.leftClick}></i>

          <div className='col-33'>
            <div className='row'>
              <img src={this.props.image[this.state.index]} />
            </div>
            <div className='row justify-center' onClick={this.buttonClick}>
              {
                this.props.image.map((current, num) => {
                  return (
                    this.state.index === num
                      ? <i key={num} id={num} className="fa-solid fa-circle size-20 margin-lr5"></i>
                      : <i key={num} id={num} className="fa-regular fa-circle size-20 margin-lr5"></i>
                  );
                })
              }
            </div>
          </div>

          <i className="fa-solid fa-chevron-right col-33" onClick={this.rightClick}></i>
        </div>
      </>
    );
  }
}
