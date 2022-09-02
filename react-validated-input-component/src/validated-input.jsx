import React from 'react';

class ValidateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasInput: false,
      hasPassword: false,
      password: ''
    };
    this.getPassword = this.getPassword.bind(this);
  }

  getPassword(e) {
    if (e.target.value.length === 0) {
      this.setState({ hasInput: false, hasPassword: false, password: e.target.value });
    } else if (e.target.value.length < 8) {
      this.setState({ hasInput: true, hasPassword: false, password: e.target.value });
    } else if (e.target.value.length >= 8) {
      this.setState({ hasInput: true, hasPassword: true, password: e.target.value });
    }
  }

  render() {
    return (
      <form>
        <label htmlFor="password-check">Password
          <div>
            <input
              type="password"
              name='password'
              id="password-check"
              value={this.state.password}
              onChange={ this.getPassword }
            /><span> </span>
            <i className={this.state.hasPassword ? 'fa-solid fa-check' : 'fa-solid fa-xmark'}></i>
          </div>
          <p className={(this.state.hasInput && !this.state.hasPassword) ? '' : 'hidden'}>Your password is too short</p>
          <p className={this.state.hasInput ? 'hidden' : ''}>A password is required</p>
        </label>
      </form>
    );
  }
}

export default ValidateInput;
