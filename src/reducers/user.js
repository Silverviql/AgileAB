import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from '../constants/User'

const initialState = {
  isGuest: true,
  firstname: null,
  lastname: null
}

const actionMap = {
  [LOGIN_REQUEST](){
  },
  [LOGIN_FAIL](){
  },
  [LOGIN_SUCCESS](){
  },
  [LOGOUT_SUCCESS](state){
    return Object.assign({}, state, {
      isGuest: true
    });
  }
}


export default function userstate(state = initialState, action) {
  const fn = actionMap[action.type];
  return (!!fn) ? fn(state, action) : initialState;
}