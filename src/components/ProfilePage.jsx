import './ProfilePage.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ProfilePage extends Component {
  render() {
    const { repos, loading } = this.props;
    let content = [];
    if (loading) {
      content = <p>....</p>;
    } else if (repos) {
      content.push(
        repos.map((repo, ix) => {
          return (
            <p key={ix}>
              <a target="_blank " href={repo.url}>
                {repo.name}
              </a>
            </p>
          );
        })
      );
    }

    return (
      <div className="profile-page nrx-container">
        <h3>Hello weback!</h3>
        <p>You're in the Matrix now. Take a look around.</p>
        {content}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  repos: state.repos,
  loading: state.loading,
});

export default connect(
  mapStateToProps,
  null
)(ProfilePage);
