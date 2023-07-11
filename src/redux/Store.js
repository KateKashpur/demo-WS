import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";

let store = {
  _state: {
    profilePage: {
      status: "",
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 11 },
        { id: 2, message: "I`ts my first post", likesCount: 20 },
        { id: 3, message: "YO", likesCount: 80 },
        { id: 4, message: "YO", likesCount: 80 },
        { id: 5, message: "YO", likesCount: 80 },
      ],
      newPostText: "YO",
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "Hi! ^_^itosik" },
        { id: 2, message: "How are yoy?" },
        { id: 3, message: "YO" },
        { id: 4, message: "YO" },
        { id: 5, message: "YO" },
        { id: 6, message: "YO" },
      ],

      dialogs: [
        { id: 1, name: "Nikitosik" },
        { id: 2, name: "Dimon" },
        { id: 3, name: "Ira" },
        { id: 4, name: "Sergey" },
        { id: 5, name: "Alla" },
        { id: 6, name: "Lena" },
        { id: 7, name: "Ruslan" },
      ],

      newMessageBody: "",
    },
    friendPage: [
      {
        id: 1,
        name: "Nikitosik",
        photo: {
          small:
            "https://th.bing.com/th/id/OIP.o64aeNnJFZgEJtRPPtZi3wHaEK?pid=ImgDet&rs=1",
        },
      },
      {
        id: 2,
        name: "Ruslan",
        photo: { small: "https://i.ytimg.com/vi/svlNbCYb9QE/hqdefault.jpg" },
      },
      {
        id: 3,
        name: "Sergey",
        photo: {
          small:
            "https://th.bing.com/th/id/OIP.GVEjYwUZcct0_TZPxZs7OAHaJp?pid=ImgDet&rs=1",
        },
      },
      {
        id: 4,
        name: "Lena",
        photo: {
          small:
            "https://th.bing.com/th/id/OIP.RBaH7cMfzWjb5vTt_PuJJQHaHa?pid=ImgDet&w=202&h=202&c=7",
        },
      },
      {
        id: 5,
        name: "Ira",
        photo: {
          small:
            "https://th.bing.com/th/id/R.e38b44e88bd70686570a016a34e0b11c?rik=SZY5ZQy5lHEOBA&pid=ImgRaw&r=0",
        },
      },
      {
        id: 6,
        name: "Dimon",
        photo: {
          small:
            "https://th.bing.com/th/id/OIP.xyVwJqIf_XKqY5gqc5xm1AHaHa?pid=ImgDet&w=202&h=202&c=7",
        },
      },
      {
        id: 7,
        name: "Alla",
        photo: {
          small:
            "https://th.bing.com/th/id/R.86a2056fc602703342b1ec619c9d752b?rik=YKzVjRQH9xgPIw&pid=ImgRaw&r=0",
        },
      },
    ],
  },

  _callSubscriber() {
    console.log("state changed");
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
    this._state.friendPage = friendsReducer(this._state.friendPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;

window.store = store;
