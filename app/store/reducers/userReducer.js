import initialState from './initialState';

import * as actions from 'store/actions/constants'

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case actions.UPDATE_USERNAME:
      return {
        ...state,
        username: action.username
      }
    case actions.GET_REPOSITORIES_SUCCESS:
      return {
        ...state,
        repositoriesList: action.response
      }
    case actions.GET_USER_INFO_SUCCESS:
      return {
        ...state,
        info: action.response
      }
    default:
      return state
  }
}
