import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import siteBarReducer from './siteBar-reducer';


let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, massage: "Мой первый пост", likes: 150, },
         ],
         newPostText: '',
      },
      dialogsPage: {
         dialogs: [
            { id: 0, name: 'Чёрный властелин' },
            { id: 1, name: 'Даун' },
            { id: 2, name: 'Шкальник' },
            { id: 3, name: 'Ян' },
            { id: 4, name: 'Александр' },
            { id: 5, name: 'Россеянская болельщица' },
            { id: 6, name: 'Рогозин' },
            { id: 7, name: 'Белый властелин' },
            { id: 8, name: 'Иван' },
         ],
         massages: [
            { id: 1, massage: "Слава Польше!" },
            { id: 2, massage: "Слава Больцеровичу!" },
            { id: 3, massage: "Слава Польскому Народу!" },
         ],
         newMassageText: '',
      },
      siteBar: [
         { id: 1, name: "Andrey" },
         { id: 2, name: "Sasha" },
         { id: 3, name: "Sveta" },
      ],
   },
   _callSubscriber() {
   },

   getState() {
      return this._state;
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },

   dispatch(action) {

      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.siteBar = siteBarReducer(this._state.siteBar, action);

      this._callSubscriber(this._state);
   }
}




export default store;
