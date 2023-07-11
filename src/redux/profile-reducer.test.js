import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 11 },
    { id: 2, message: "I`ts my first post", likesCount: 20 },
    { id: 3, message: "YO", likesCount: 80 },
    { id: 4, message: "AAA", likesCount: 20 },
  ],
};

test("message of new posts should be changed", () => {
  let action = addPostActionCreator("OLOLO");
  let newState = profileReducer(state, action);
  expect(newState.posts[4].message).toBe("OLOLO");

});

test("length of posts should be incremented", () => {
  let action = addPostActionCreator("OLOLO");
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(5);
});

test("after deleting lrngth of messages should be decrement ", () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(4);
});

test("after deleting lrngth of messages should`nt be changed ", () => {
  let action = deletePost(1000);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(4);
});