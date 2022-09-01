import React from 'react';

class AppDrawer extends React.Component {

  render() {
    return (
      <div>
        <div>
          <div className='background-grey'></div>
          <i className="fa-solid fa-bars"></i>
          <div className="open-drawer">
            <h2>Menu</h2>
            <h3>About</h3>
            <h3>Get Started</h3>
            <h3>Sign In</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
