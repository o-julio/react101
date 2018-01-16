import React, {Component, PropTypes} from 'react';
import RepoListItem from './RepoListItem';
import {getRepos} from 'utils/github-api'
import {connect} from 'react-redux'
import {getRepositories, getRepositoriesSuccess} from 'store/actions/actions'

class RepoList extends Component {
  constructor() {
    super()
    this.state = {repos: []}
  }

  componentWillMount() {
    this.props.username && this.props.getRepos(this.props.username);
  }

  render() {
    const {filter, repos} = this.props
    return (
      <ul className="list-unstyled">
        {renderRepos(repos, filter.toLowerCase())}
      </ul>
    );
  }
}

RepoList.propTypes = {
  repos: PropTypes.array,
  filter: PropTypes.string,
  username: PropTypes.string,
  getRepos: PropTypes.func,
};

function renderRepos(repos, filter) {
  return repos
    .filter(repo => {
      return !filter ||
        (repo.name && repo.name.toLowerCase().includes(filter)) ||
        (repo.description && repo.description.toLowerCase().includes(filter));
    })
    .sort((a, b) => Date.parse(b.pushed_at) - Date.parse(a.pushed_at))
    .map(repo => <RepoListItem key={repo.id} repo={repo} />);
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    repos: state.user.repositoriesList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRepos: (username) => {
      dispatch(getRepositories())
      getRepos(username).then(response => {
        dispatch(getRepositoriesSuccess(response))
      });
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoList)
