import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('state', this.state);
    this.setState({ username: '', password: '' });
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={ this.state.username }
              onChange={ this.handleUsernameChange }
             />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={ this.state.password }
              onChange={ this.handlePasswordChange }
            />
          </label>
          <label>
          <button>Sign Up</button>
          </label>
        </form>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<RegistrationForm />);
