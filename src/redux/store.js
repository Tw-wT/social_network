import messagesReducer from "./messages-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

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
    sidebar: {},
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

    // action - объект, у него обязательно должно быть свойство type. Например type: "ADD-POST"
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._callSubscriber(this._state)
  },
}

export default store
