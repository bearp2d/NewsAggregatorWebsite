import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
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
    this.props.processForm(this.state);
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
        {this.props.navLink}

        {this.renderErrors()}

        <label htmlFor="username">Username
          <input id="username" type="text"
            onChange={this.update("username")}
            value={this.state.username}></input>
        </label>

         <label htmlFor="email">Email(optional)
           <input id="email" type="text"
             onChange={this.update("email")}
             value={this.state.email}></input>
         </label>

         <label htmlFor="password">Password
           <input id="password" type="password"
             onChange={this.update("password")}
             value={this.state.password}></input>
         </label>

          <input type="submit" value={this.props.formType.toUpperCase()}/>

      </form>
    )
  }
}

export default withRouter(SessionForm);
