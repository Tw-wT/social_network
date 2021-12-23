const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
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
  ],
  newMessageBody: "",
}

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return {
        ...state,
        newMessageBody: action.body,
      }
    }
    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 4, message: body }],
      }
    }
    default:
      return state
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
})

export default messagesReducer
