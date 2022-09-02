import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: false
    };
    this.handleAcdn = this.handleAcdn.bind(this);
  }

  // console.log(props);
  handleAcdn(e) {
    // console.log(e);
  }

  render() {
    // console.log(this.props);
    // const listItems = this.props.map();

    return (
      <h4>dfdcc</h4>
    );
  }
}

export default Accordion;
