import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
   profile: [],
   posts: [
      { id: 1, massage: "Мой первый пост", likes: 150, },
      { id: 2, massage: "Мой первый пост", likes: 150, },
      { id: 3, massage: "Мой первый пост", likes: 150, },
      { id: 4, massage: "Мой первый пост", likes: 150, },
   ],
};

it('length of post should be incremented', () => {
   //1. test data
   let action = addPostActionCreator('Привет');

   //2. action
   let newState = profileReducer(state, action);

   //3. expectation
   expect(newState.posts.length).toBe(5);
});

it('massage of new post should be correct', () => {
   //1. test data
   let action = addPostActionCreator('Привет');

   //2. action
   let newState = profileReducer(state, action);

   //3. expectation
   expect(newState.posts[4].massage).toBe('Привет');
});

it('after deleting length of massage should be decrement', () => {
   //1. test data
   let action = deletePost(1);

   //2. action
   let newState = profileReducer(state, action);

   //3. expectation
   expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
   //1. test data
   let action = deletePost(1000);

   //2. action
   let newState = profileReducer(state, action);

   //3. expectation
   expect(newState.posts.length).toBe(4);
});