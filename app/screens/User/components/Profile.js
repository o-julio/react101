import React, {Component, PropTypes} from 'react';
import Tooltip from 'react-tooltip';
import {getUserData} from 'utils/github-api'
import ProfileStat from './ProfileStat'
import {connect} from 'react-redux'
import {getUserInfo, getUserInfoSuccess} from 'store/actions/actions'

class Profile extends Component {
  componentWillMount() {
    this.props.username && this.props.getUserData(this.props.username);
  }

  render() {
    const {user, orgs} = this.props;
    return (
      <div>
        <section className="user border-bottom">
          <img
            src={user.avatar_url}
            className="img-rounded img-responsive"
            alt="User Avatar"
          />
          <h2>{user.name}</h2>
          <h5>{user.login}</h5>
        </section>
        <section className="stats border-bottom">
          <ProfileStat value={user.followers} label="followers" />
          <ProfileStat value={user.public_repos} label="repositories" />
          <ProfileStat value={user.following} label="following" />
        </section>
        <section className="orgs">
          <h4>Organizations</h4>
          {orgs.map(org => (
            <img
              key={org.id}
              src={org.avatar_url}
              alt="Organization Avatar"
              data-tip={org.login}
            />
          ))}
          <Tooltip effect="solid" />
        </section>
      </div>
    );
  }
}

Profile.propTypes = {
  username: PropTypes.string,
  getUserData: PropTypes.func,
  user: PropTypes.object,
  orgs: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    user: state.user.info.user,
    orgs: state.user.info.orgs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: (username) => {
      dispatch(getUserInfo())
      getUserData(username).then((response) => {
        dispatch(getUserInfoSuccess(response))
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
