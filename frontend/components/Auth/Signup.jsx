import React from 'react'

export default class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { processForm, history } = this.props
    processForm(this.state)
      .then(() => history.push("/dashboard"));
  }

  render() {
    const { username, password, email } = this.state;
    const { errors } = this.props;
    return (
      <div>
        <div className="form_errors">
          {errors}
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>Email:
            <input
              onChange={this.handleInput}
              name="email"
              type="email"
              value={email}
            />
          </label>
          <br />
          <label>Username:
            <input
              onChange={this.handleInput}
              name="username"
              type="text"
              value={username}
            />
          </label>
          <br />
          <label>Password:
            <input
              onChange={this.handleInput}
              name="password"
              type="password"
              value={password}
            />
          </label>
          <br />
          <button type="submit">Sign up!</button>
        </form>
      </div>
    )
  }
}