import dialogsReducer, { addMassageActionCreator, deleteMassageActionCreator } from "./dialogs-reducer";

let state = {
   dialogs: [
      { id: 0, name: 'Чёрный властелин' },
      { id: 1, name: 'Иван' },
      { id: 2, name: 'Шкальник' },
      { id: 3, name: 'Ян' },
      { id: 4, name: 'Александр' },
      { id: 5, name: 'Николай' },
      { id: 6, name: 'ПК' },
      { id: 7, name: 'Белый властелин' },
      { id: 8, name: 'Лень было имя придумывать' },
   ],
   massages: [
      { id: 1, massage: "Привет" },
      { id: 2, massage: "Сообщение" },
      { id: 3, massage: "1234" },
   ]
}

it('length of massages should be incremented', () => {
   //1. test data
   let action = addMassageActionCreator('Привет');

   //2. action
   let newState = dialogsReducer(state, action);

   //3. expectation
   expect(newState.massages.length).toBe(4);
});

it('massage of new massages should be correct', () => {
   //1. test data
   let action = addMassageActionCreator('Привет');

   //2. action
   let newState = dialogsReducer(state, action);

   //3. expectation
   expect(newState.massages[3].massage).toBe('Привет');
});

it('after deleting length of massage should be decrement', () => {
   //1. test data
   let action = deleteMassageActionCreator(1);

   //2. action
   let newState = dialogsReducer(state, action);

   //3. expectation
   expect(newState.massages.length).toBe(2);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
   //1. test data
   let action = deleteMassageActionCreator(1000);

   //2. action
   let newState = dialogsReducer(state, action);

   //3. expectation
   expect(newState.massages.length).toBe(3);
});