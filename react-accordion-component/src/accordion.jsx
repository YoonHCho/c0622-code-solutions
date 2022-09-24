import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: false
    };
    this.handleAcdn = this.handleAcdn.bind(this);
  }

  handleAcdn(e) {
    // console.log(e);
  }

  render() {
    const accordion = this.props.array;
    return (
      <>
        <div className='container'>
          {accordion.map(accord => {
            return (
              <div key={accord.id.toString()} onClick={this.handleAcdn} >
                <h3 className='col-full'>{accord.topic}</h3>
                <p className='para'>{accord.detail}</p>
              </div>
            );
          })
          }
        </div>
      </>
    );
  }
}

export default Accordion;
