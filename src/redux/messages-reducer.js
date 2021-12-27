
const SEND_MESSAGE = "SEND_MESSAGE"

let initialState = {
  messages: [
    {
      id: 1,
      message: "hi",
    },
    {
      id: 2,
      message: "hi",
    },
    {
      id: 3,
      message: "hi",
    },
  ],
  dialogs: [
    { id: 1, name: "Карина" },
    { id: 2, name: "Карипупсик" },
    { id: 3, name: "Кариночка" },
  ]
}

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 4, message: body }],
      }
    }
    default:
      return state
  }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default messagesReducer
