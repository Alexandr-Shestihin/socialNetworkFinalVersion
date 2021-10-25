import { profileAPI, usersAPI } from './../components/api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialeState = {
   profile: [],
   posts: [
      { id: 1, massage: "Мой первый пост", likes: 150, },
   ],
   newPostText: '',
   status: '',
}

const profileReducer = (state = initialeState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: state.posts.length + 1,
            massage: action.newText,
            likes: 50,
         }
         return {
            ...state,
            newPostText: '',
            posts: [...state.posts, newPost],
         };
      }

      case DELETE_POST: {
         return {
            ...state,
            posts: [...state.posts.filter(p => p.id != action.id)],
         };
      }

      case SET_USER_PROFILE: {
         return {
            ...state,
            profile: action.profile,
         }
      }

      case SET_STATUS:
         return {
            ...state,
            status: action.status,
         }
      default: return state;
   }

}

export const addPostActionCreator = (text) => ({ type: ADD_POST, newText: text })
export const deletePost = (postId) => ({ type: DELETE_POST, id: postId })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const thunkProfile = (userId) => async (dispatch) => {
   let response = await usersAPI.getProfile(userId);
   dispatch(setUserProfile(response.data))
}
export const thunkUserStatus = (userId) => async (dispatch) => {
   let response = await profileAPI.getStatus(userId)
   dispatch(setStatus(response.data))
}
export const thunkUpdateStatus = (status) => async (dispatch) => {
   let response = await profileAPI.updateStatus(status);
   if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
   }
}

export default profileReducer;