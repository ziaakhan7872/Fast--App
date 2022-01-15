import { REGISTER_SUCCESS, REGISTER_COMPLETE,
   LOGIN_COMPLETE,LOADING,FORGOT_PASSWORD,
   FORGOT_PASSWORD_CODE,RESET_PASSWORD,
   REGISTER_ERROR,LOGIN_ERROR } from '../types';
import Auth from '../../services/Auth';

export function setType(payload) {
  return {
    type: REGISTER_SUCCESS,
    payload: payload
  }
}
// action creator for register complete
export function registerComplete(payload) {
  return {
    type: REGISTER_COMPLETE,
    payload: payload
  }
}
export function registerUser(payload) {
  console.log('payload',payload)
  return (dispatch) => {
    dispatch({type:LOADING})
    Auth.Register(payload.username, payload.email, payload.password, payload.phone, payload.type)
      .then(res => res.data)
      .then(data => {
        console.log('data',data)
        dispatch({
          type: REGISTER_COMPLETE,
          payload: data,
        })
        dispatch({type:LOADING})
      })
      .catch(err => {
        //onError(err.response.data)
        dispatch({
          type: REGISTER_ERROR,
          payload: err.response.data,
        })
        console.error('Error:', err.response.data);
        dispatch({type:LOADING})
      
      })
  };
}

export function loginUser(payload) {
 // console.log('login',payload)
  return (dispatch) => {
    dispatch({type:LOADING})
    Auth.Login( payload.email, payload.password)
      .then(res => res.data)
      .then(data => {
        //logedIn(data.msg)
        //console.log('data====>>',data)
        dispatch({
          type: "LOGIN_TOKEN",
          payload: data,
        })
        dispatch({type:LOADING})
      })
      .catch(err => {
        //onError(err.response.data)
        dispatch({
          type: LOGIN_ERROR,
          payload: err.response.data,
        })
        console.error('Error:', err.response.data);
        dispatch({type:LOADING})
      
      })
  };
}

export function forgotPassword(payload) {
  console.log('forgotPassword',payload)
  return (dispatch) => {
    dispatch({type:LOADING})
    Auth.ForgotPassword( payload.email)
      .then(res => res.data)
      .then(data => {
       // logedIn(data.msg)
        //console.log('data from forgot auth actions',data)
        dispatch({
          type: FORGOT_PASSWORD,
          payload: data,
        })
        dispatch({type:LOADING})
      })
      .catch(err => {
        console.error('Error:', err.response.data);
        dispatch({type:LOADING})
      
     })
  };
}
export function forgotPasswordCode(payload,code) {
 // console.log('forgotPassword====',payload)
  return (dispatch) => {
    dispatch({type:LOADING})
    Auth.ForgotPasswordCode( payload.digit)
      .then(res => res.data)
      .then(data => {
        code(data.msg)
        console.log('data from forgot auth actions',data)
        dispatch({
          type: FORGOT_PASSWORD_CODE,
          payload: data,
        })
        dispatch({type:LOADING})
      })
      .catch(err => {
        console.error('Error:', err.response.data);
        //code(err.response.data)
        dispatch({type:LOADING})
      
      })
  };
}
export function updatePassword(payload,resetpassword) {
 // console.log('forgotPassword====>>',payload)
  return (dispatch) => {
    dispatch({type:LOADING})
    Auth.UpdatePassword(payload.password)
      .then(res => res.data)
      .then(data => {
        //console.log('data Password from auth actions===>',data)
        resetpassword(data)
        dispatch({
          type: RESET_PASSWORD,
          payload: data,
        })
      })     
      .catch(err => {
        dispatch({type:LOADING})
        console.error('Error:', err.response.data);
      })
  };
}
