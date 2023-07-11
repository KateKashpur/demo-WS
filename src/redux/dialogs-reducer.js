const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messages: [
    { id: 1, message: "Hi! ^_^itosik" },
    { id: 2, message: "How are yoy?" },
    { id: 3, message: "YO" },
    { id: 4, message: "YO" },
    { id: 5, message: "YO" },
    { id: 6, message: "YO" },
  ],

  sidebar: [
    { id: 1, name: "Nikitosik" },
    { id: 2, name: "Dimon" },
    { id: 3, name: "Ira" },
    { id: 4, name: "Sergey" },
    { id: 5, name: "Alla" },
    { id: 6, name: "Lena" },
    { id: 7, name: "Ruslan" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody;
      let nextIdMessages = state.messages.length + 1
      let newMessage = {
        id: nextIdMessages + body,
        message: body,
     };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;
