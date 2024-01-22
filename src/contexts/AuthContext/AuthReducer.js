import * as actions from './actions';

const AuthReducer = (state, action) => {
  switch (action.type) {

    case actions.SET_AUTH:
      return {...state,...action.payload}

    default:
      return state;

  }
}

export default AuthReducer;