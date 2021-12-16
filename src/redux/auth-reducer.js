import { usersAPI, securityAPI } from './../components/api/api';

const SET_AUTH_USER_DATA = 'project/ayth/SET_AUTH_USER_DATA';
const GET_CAPTCHA_URL = 'project/ayth/GET_CAPTCHA_URL';

let initialeState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
   captchaUrl: null,
}

const authReducer = (state = initialeState, action) => {
   switch (action.type) {
      case SET_AUTH_USER_DATA:
      case GET_CAPTCHA_URL: {
         return {
            ...state,
            ...action.payload,
         };
      }
      default: return state;
   }

}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: { userId, email, login, isAuth } });

export const getCaptchaUrlSuccess = (captchaUrl) =>
   ({ type: GET_CAPTCHA_URL, payload: { captchaUrl } });

export const thunkAuth = () => async (dispatch) => {
   let response = await usersAPI.auth();
   if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true))
   }
}

export const thunkLogin = (email, password, rememberMe, captcha, setStatus) => async (dispatch) => {
   dispatch(getCaptchaUrlSuccess(null));
   //Это, чтобы капча не висела, каогда она не нужна

   let response = await usersAPI.login(email, password, rememberMe, captcha);
   if (response.data.resultCode === 0) {
      dispatch(thunkAuth())

   } else if (response.data.messages[0] === 'Incorrect Email or Password') {
      setStatus(response.data.messages)

   } else if (response.data.resultCode === 10) {
      setStatus(response.data.messages);

      dispatch(thunkGetCaptchaUrl())
   }
}

export const thunkGetCaptchaUrl = () => async (dispatch) => {
   const response = await securityAPI.getCaptchaUrl();
   const valueCaptchaUrl = (response.data.url);

   dispatch(getCaptchaUrlSuccess(valueCaptchaUrl));
}

export const thunkLogout = () => async (dispatch) => {
   let response = await usersAPI.logout();
   if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
   }
}

export default authReducer;