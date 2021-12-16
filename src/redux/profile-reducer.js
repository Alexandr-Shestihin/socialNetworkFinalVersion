import { profileAPI, usersAPI } from './../components/api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SEVE_PHOTO_SUCCESS = 'SEVE_PHOTO_SUCCESS';
const SET_EDIT_MODE = 'SET_EDIT_MODE';

let initialeState = {
   profile: [],
   posts: [
      { id: 1, massage: "Мой первый пост", likes: 150, },
      { id: 2, massage: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias est inventore aliquam at officia harum eaque optio corporis molestiae, quo voluptatem deleniti iusto, esse veritatis quis rerum aspernatur cum? Accusamus nesciunt reiciendis obcaecati commodi magnam maiores laboriosam officiis consequatur nam, mollitia blanditiis quibusdam repudiandae. Doloribus dolorem a consectetur fugiat magnam vero perspiciatis, accusantium fugit provident nam voluptates, ipsum eveniet porro blanditiis, quos qui? Eveniet provident consequatur necessitatibus tempore ad esse corporis, autem voluptate unde accusantium nulla, mollitia facere nesciunt? Ut, nisi culpa consequuntur eius velit ipsam qui recusandae facilis necessitatibus fugiat molestiae modi quo tempora ipsum alias similique. Necessitatibus sapiente minima facere culpa ipsum natus impedit. Suscipit est soluta id. Magni ad libero a repellat expedita doloremque impedit dolorum illum porro sint. Quibusdam, totam expedita! Ea deleniti esse doloribus aspernatur architecto eaque velit hic, officia voluptates voluptatem ad distinctio modi, quaerat nisi, minima provident consequuntur? Dolores beatae earum possimus incidunt eaque dolorum sapiente illum, alias tempore impedit repellat quas porro dolor odio atque fugit voluptatem itaque non maiores quibusdam officia voluptates sint vitae. Suscipit unde harum nesciunt non pariatur error, ipsa modi aut? Explicabo tenetur obcaecati assumenda necessitatibus repudiandae fugit id, soluta, voluptatum unde vel expedita animi sequi itaque perspiciatis?", likes: 60, },
   ],
   newPostText: '',
   status: '',
   editMode: false,
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


      case SEVE_PHOTO_SUCCESS:
         return {
            ...state,
            profile: { ...state.profile, photos: action.photos }
         }

      case SET_EDIT_MODE:
         return {
            ...state,
            editMode: action.value
         }

      default: return state;
   }

}

export const addPostActionCreator = (text) => ({ type: ADD_POST, newText: text })
export const deletePost = (postId) => ({ type: DELETE_POST, id: postId })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const savePhotoSuccess = (photos) => ({ type: SEVE_PHOTO_SUCCESS, photos })
export const setEditMode = (value) => ({ type: SET_EDIT_MODE, value })

export const thunkProfile = (userId) => async (dispatch) => {
   let response = await usersAPI.getProfile(userId);
   dispatch(setUserProfile(response.data))
}
export const thunkUserStatus = (userId) => async (dispatch) => {
   let response = await profileAPI.getStatus(userId)
   dispatch(setStatus(response.data))
}
export const thunkUpdateStatus = (status) => async (dispatch) => {
   // try {
   let response = await profileAPI.updateStatus(status);
   if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
   }
   // } catch (error) {
   //   alert(error)
   //}//обработка ошибок
}
export const thunkSavePhoto = (photo) => async (dispatch) => {
   let response = await profileAPI.savePhoto(photo);

   if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos))
   }
}
export const thunkSaveProfile = (profileData, setStatus) => async (dispatch, getState) => {
   const userId = getState().auth.userId;

   let response = await profileAPI.saveProfile(profileData);

   if (response.data.resultCode === 0) {

      //После того, как обновления прошли успешно, вызываем обновление профиля
      dispatch(thunkProfile(userId))
      dispatch(setEditMode(false))
      console.log("response.data.resultCode === 0")
   } else switch (response.data.messages[0]) {
      case 'Invalid url format (Contacts->Facebook)':
         dispatch(setEditMode(true));

         setStatus(response.data.messages[0])
         break;
      case 'Invalid url format (Contacts->Vk)':
         dispatch(setEditMode(true));

         setStatus(response.data.messages[0])
         break;
      case 'Invalid url format (Contacts->Website)':
         dispatch(setEditMode(true));

         setStatus(response.data.messages[0])
         break;
      case 'Invalid url format (Contacts->Twitter)':
         dispatch(setEditMode(true));

         setStatus(response.data.messages[0])
         break;
      case 'Invalid url format (Contacts->Instagram)':
         dispatch(setEditMode(true));

         setStatus(response.data.messages[0])
         break;
      case 'Invalid url format (Contacts->Youtube)':
         dispatch(setEditMode(true));

         setStatus(response.data.messages[0])
         break;
      case 'Invalid url format (Contacts->Github)':
         dispatch(setEditMode(true));

         setStatus(response.data.messages[0])
         break;
      case 'Invalid url format (Contacts->MainLink)':
         dispatch(setEditMode(true));

         setStatus(response.data.messages[0])
         break;
      default:
         alert("Нет таких значений");
   }
}
export default profileReducer;