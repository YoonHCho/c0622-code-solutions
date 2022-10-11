import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };

    this.rightClick = this.rightClick.bind(this);
    this.leftClick = this.leftClick.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  // componentDidMount() {

  // }

  rightClick() {
    // eslint-disable-next-line no-console
    console.log('right clicked');
  }

  leftClick() {
    // eslint-disable-next-line no-console
    console.log('left clicked');
  }

  buttonClick(e) {
    // eslint-disable-next-line no-console
    console.log('typeof e.target.id: ', typeof Number(e.target.id));
    // eslint-disable-next-line no-console
    console.log('typeof this.state.index: ', typeof this.state.index);
    // eslint-disable-next-line no-console
    console.log('id: ', e.target.id);

  }

  render() {
    // eslint-disable-next-line no-console
    console.log('length: ', this.props.prop.length);
    // eslint-disable-next-line no-console
    console.log('this.props: ', this.props.prop[0]);
    // let solid;
    // let empty;
    // const id = this.state.index;
    // for (let i = 0; i < this.props.prop.length; i++) {
    //   if (this.state.index === Number(this.props.prop[i])) {
    //     solid = 'fa-solid fa-circle size-20 margin-lr5';
    //   } else {
    //     empty = 'fa-regular fa-circle size-20 margin-lr5';
    //   }
    // }
    return (
      <>
        <div className='container row'>
          <i className="fa-solid fa-chevron-left col-33" onClick={this.leftClick}></i>

          <div className='col-33'>
            <div className='row'>
              <img src={this.props.prop[this.state.index]} />
            </div>
            <div className='row justify-center' onClick={this.buttonClick}>
              <i id="0" className="fa-solid fa-circle size-20 margin-lr5"></i>
              <i id="1" className="fa-regular fa-circle size-20 margin-lr5"></i>
              <i id="2" className="fa-regular fa-circle size-20 margin-lr5"></i>
              <i id="3" className="fa-regular fa-circle size-20 margin-lr5"></i>
              <i id="4" className="fa-regular fa-circle size-20 margin-lr5"></i>
            </div>
          </div>

          <i className="fa-solid fa-chevron-right col-33" onClick={this.rightClick}></i>
        </div>
      </>
    );
  }
}
