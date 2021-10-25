//Рудиментная страница

import { loginAPI } from '../components/api/api';

const POST_LOGIN = 'POST_LOGIN';

let initialeState = {
   login: 'AlexMoscow',
   password: 'agK7gihz2Me!48i',
   rememberMe: false,
}

export const loginReducer = (state = initialeState, action) => {
   switch (action.type) {
      case POST_LOGIN:
         return {
            ...state,
            login: action.data.loginData.login,
            password: action.data.loginData.password,
            rememberMe: action.data.loginData.rememberMe,
         };

      default: return state;
   }

}

export const setLogin = (loginData) => ({ type: POST_LOGIN, data: { loginData } });

export const thunkLogin = () => {
   return (dispatch) => {
      loginAPI.postLogin().then(response => {
         if (response.data.resultCode === 0) {
            let { email, password, rememberMe } = response.data.userId;
            dispatch(setLogin(email, password, rememberMe))
         }
      })
   }
}
export default loginReducer;