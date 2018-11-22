import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      demo: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(
      success => this.props.closeModal(),
      errors => {});
  }

  renderErrors() {
    const liStyle = {
      color: "red"
    }
    return (
    <ul id="errors-list">
      {this.props.errors.map((error, idx) => (
        <li key={idx} style={liStyle}>{error}</li>
      ))}
    </ul>)
  }

  render() {
    return (
      <form id="session-form" onSubmit={this.handleSubmit}>

        <h2>{this.props.formType}</h2>

        {this.renderErrors()}

        <input id="username" type="text"
          onChange={this.update("username")}
          placeholder="Username"
          value={this.state.username}></input>

        <input id="email" type="text"
          onChange={this.update("email")}
          placeholder="Email(optional)"
          value={this.state.email}></input>


        <input id="password" type="password"
          onChange={this.update("password")}
          placeholder="Password"
          value={this.state.password}></input>

        <div id="submit-field">
          <input type="submit"
            value={this.props.formType.toUpperCase()}/>
          <span>
            Go To <a onClick={this.props.otherForm}>{this.props.otherFormType}</a>
          </span>
        </div>

      </form>
    )
  }
}

export default withRouter(SessionForm);
