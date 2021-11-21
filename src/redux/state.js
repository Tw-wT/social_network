const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: "hi",
          countLike: 7,
        },
        {
          id: 2,
          message: "hi",
          countLike: 5,
        },
      ],
      newPostText: "new post",
    },
    messagesPage: {
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
    },
  },
  _callSubscriber() {
    console.log("state changed")
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    // action - объект, у него обязательно должно быть свойство. Например type: "ADD-POST"
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        countLike: 0,
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ""
      this._callSubscriber()
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber()
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.messagesPage.newMessageBody = action.body
      this._callSubscriber()
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.messagesPage.newMessageBody
      this._state.messagesPage.newMessageBody = ""
      this._state.messagesPage.messages.push({ id: 4, message: body })
      this._callSubscriber()
    }
  },
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
})

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})

export default store
