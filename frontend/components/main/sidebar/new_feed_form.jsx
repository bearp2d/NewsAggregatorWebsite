import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../../actions/modal_actions';
import {createNewFeed } from '../../../actions/feed_actions';

class NewFeedForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state.title).then(
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
        <form id="new-feed-form" onSubmit={this.handleSubmit}>

          <header>
            <h1 className="title">Create New Feed</h1>
            <span>A private collection of trusted sources you want to read</span>
          </header>

          <input id="title" type="text"
            onChange={this.update("title")}
            placeholder="Title(required)"
            value={this.state.title}></input>

          {this.renderErrors()}
          
          <div id="submit-field">
            <input type="submit" value="SAVE"/>
            <button id="cancel-button" onClick={this.props.closeModal}>
              CANCEL
            </button>
          </div>

        </form>
    )
  }
};

const mapStateToProps = (state) => ({
  errors: []
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  processForm: (title) => dispatch(createNewFeed(title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewFeedForm);
