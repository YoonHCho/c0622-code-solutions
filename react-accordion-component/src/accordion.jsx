import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paraId: null
    };
    this.handleAcdn = this.handleAcdn.bind(this);
  }

  handleAcdn(id) {
    if (this.state.paraId === id) {
      this.setState({ paraId: null });
    } else {
      this.setState({ paraId: id });
    }
  }

  render() {
    const accordion = this.props.array;
    return (
      <>
        <div className='container'>
          {accordion.map(accord => {
            return (
              <div key={accord.id.toString()}>
                <div onClick={() => this.handleAcdn(accord.id)}>
                  <h3 value={accord.id} className='col-full'>{accord.topic}</h3>
                </div>
                { this.state.paraId === accord.id &&
                  <div>
                    <p value={accord.id} className='para'>{accord.detail}</p>
                  </div>
                }
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
