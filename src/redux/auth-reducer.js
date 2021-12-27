import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"

const SET_USER_DATA = "SET_USER_DATA"
const LOGIN = "LOGIN"

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...action,
        ...action.data,        
      }
    case LOGIN:
      return{
        
      }
    default:
      return state
  }
}

export const userLogin = (login, password, rememberMe) => ({type: LOGIN, data: { login, password, rememberMe }})

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { userId, email, login, isAuth },
})
//thunks
export const getAuthUserData = () => (dispatch) =>{
  return authAPI.me().then(response => {
    if(response.data.resultCode === 0) {
      let {id, login, email} = response.data.data
      dispatch(setAuthUserData(id, email, login))
    }
  })
}

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData())
    } else {
      let message =response.data.messages.length > 0 ? response.data.messages[0]:"Some error"
      dispatch(stopSubmit("login", {_error: message}))
    }
  })
}

export const logout = () => {
  return(dispatch) => {
    authAPI.logout().then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData(null, null, null, false))
      }
    })
  }
}

export default authReducer
