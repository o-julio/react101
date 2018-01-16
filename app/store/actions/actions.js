import * as actions from './constants'

export function updateUsername(username) {
  return {
    type: actions.UPDATE_USERNAME,
    username
  }
}

export function getRepositories() {
  return {
    type: actions.GET_REPOSITORIES,
  }
}

export function getRepositoriesSuccess(response) {
  return {
    type: actions.GET_REPOSITORIES_SUCCESS,
    response
  }
}

export function getRepositoriesFailure(error) {
  return {
    type: actions.GET_REPOSITORIES_FAILURE,
    error
  }
}

export function getUserInfo() {
  return {
    type: actions.GET_USER_INFO,
  }
}

export function getUserInfoSuccess(response) {
  return {
    type: actions.GET_USER_INFO_SUCCESS,
    response
  }
}

export function getUserInfoFailure(error) {
  return {
    type: actions.GET_USER_INFO,
    error,
  }
}
