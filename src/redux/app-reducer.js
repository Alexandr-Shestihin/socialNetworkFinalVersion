import { thunkAuth } from '../redux/auth-reducer';

const INITIALAZED_SUCCESS = 'INITIALAZED_SUCCESS';

let initialeState = {
   initialized: false,
}

const appReducer = (state = initialeState, action) => {
   switch (action.type) {
      case INITIALAZED_SUCCESS:
         return {
            ...state,
            initialized: true,
         };

      default: return state;
   }

}

export const initialazedSuccess = () => ({ type: INITIALAZED_SUCCESS });

export const initialazeApp = () => {
   return (dispatch) => {
      let promise = dispatch(thunkAuth());
      Promise.all([promise])
         .then(() => {
            dispatch(initialazedSuccess())
         });
   }
}

export default appReducer;