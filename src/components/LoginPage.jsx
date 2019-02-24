import React, { Component } from 'react';
import auth from '../utilities/auth';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getReposRequest } from '../actions';

export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
    };
  }

  login = () => {
    auth.authenticate(() => {
      this.props.getReposRequest();
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) return <Redirect to={from.pathname} />;
    return (
      <div className="nrx-container">
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getReposRequest: getReposRequest,
};
export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
