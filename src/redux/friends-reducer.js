const SET_FRIEND_PROFILE = "SET_FRIEND_PROFILE";

let initialState = {
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
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRIEND_PROFILE: {
      return { ...state, friendPage: action.friendPage };
    }

    default:
      return state;
  }
};

export const setFriendProfile = (friendPage) => ({
  type: SET_FRIEND_PROFILE,
  friendPage,
});

export default friendsReducer;
