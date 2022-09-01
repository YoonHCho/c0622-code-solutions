import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenu: false
    };

    this.getMenu = this.getMenu.bind(this);
  }

  getMenu(e) {
    if (!this.state.isMenu && e.target.nodeName === 'I') {
      this.setState({ isMenu: true });
    } else if (this.state.isMenu && (e.target.nodeName === 'H3' || e.target.className === 'background-grey')) {
      this.setState({ isMenu: false });
    }
  }

  render() {
    let background;
    let onOrOff;
    if (!this.state.isMenu) {
      background = '';
      onOrOff = 'open-drawer hidden';
    } else {
      background = 'background-grey';
      onOrOff = 'open-drawer';
    }
    return (
      <div onClick={this.getMenu} className='main'>
        <div className={background}></div>
        <i onClick={ this.getMenu } className="fa-solid fa-bars"></i>
        <div className={onOrOff}>
          <h2>Menu</h2>
          <h3>About</h3>
          <h3>Get Started</h3>
          <h3>Sign In</h3>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
