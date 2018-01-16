import React, {Component} from 'react';
import {connect} from 'react-redux';
import { updateUsername } from 'store/actions/actions'

class Home extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push({pathname: `/${this.props.username}`});
  }

  handleChange = (e) => {
    this.props.updateUsername(e.target.value)
  }

  render() {
    return (
      <section className="container home">
        <form
          className="form-inline"
          role="form"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter a GitHub user..."
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Go
          </button>
        </form>
      </section>
    );
  }
}

Home.propTypes = {
  username: React.PropTypes.string,
  updateUsername: React.PropTypes.func,
  history: React.PropTypes.object,
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUsername: (username) => {
      dispatch(updateUsername(username))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
