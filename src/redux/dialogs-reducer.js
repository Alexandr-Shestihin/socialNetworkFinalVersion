const ADD_MASSAGE = 'ADD-MASSAGE';
const DELETE_MASSAGE = 'DELETE-MASSAGE';

let initialeState = {
   dialogs: [
      { id: 0, name: 'Владимир Иванов' },
      { id: 1, name: 'Иван' },
      { id: 2, name: 'Пётр' },
      { id: 3, name: 'Ян' },
      { id: 4, name: 'Александр' },
      { id: 5, name: 'Николай' },
      { id: 6, name: 'Артём' },
      { id: 7, name: 'Дмитрий' },
      { id: 8, name: 'Лев' },
   ],
   massages: [
      { id: 1, massage: "Привет" },
      { id: 2, massage: "Сообщение" },
      { id: 3, massage: "1234" },
   ]
}

const dialogsReducer = (state = initialeState, action) => {
   switch (action.type) {
      case ADD_MASSAGE: {
         let newMassage = {
            id: state.massages.length + 1,
            massage: action.text,
         }
         return {
            ...state,
            massages: [...state.massages, newMassage],
         };
      }

      case DELETE_MASSAGE: {
         return {
            ...state,
            massages: [...state.massages.filter(p => p.id != action.id)],
         };
      }
      default:
         return state;
   }
}

export const addMassageActionCreator = (text) => {
   return {
      type: ADD_MASSAGE, text: text,
   }
}
export const deleteMassageActionCreator = (messageId) => {
   return {
      type: DELETE_MASSAGE, id: messageId,
   }
}

export default dialogsReducer;