import React, {Component, PropTypes} from 'react';
import Profile from 'screens/User/components/Profile'
import RepoFilter from 'screens/User/components/RepoFilter'
import RepoList from 'screens/User/components/RepoList'
import {connect} from 'react-redux'

class User extends Component {
  constructor() {
    super()
    this.state = {filter: ''}
  }

  handleFilterUpdate = (filter) => {
    this.setState({filter})
  }

  componentWillMount() {
    if(!this.props.username) {
      this.props.history.replace({pathname: `/`});
    }
  }

  render() {
    const {username} = this.props
    const {filter} = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <Profile username={username} />
          </div>
          <div className="col-sm-9">
            <h3>Repositories</h3>
            <RepoFilter onUpdate={this.handleFilterUpdate} />
            <RepoList filter={filter} username={username} />
          </div>
        </div>
      </div>
    );
  }
}

User.propTypes = {
  history: PropTypes.object,
  username: PropTypes.string,
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username
  }
}

export default connect(mapStateToProps)(User)
