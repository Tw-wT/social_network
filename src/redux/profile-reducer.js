const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT" 
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
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
  newPostText: "",
  profile: null,
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, {id:5, message: state.newPostText, countLike: 0}],
        newPostText: ""
      }
    }
    case UPDATE_NEW_POST_TEXT:{
      return {
        ...state,
        newPostText: action.newText
      }
    }
    case SET_USER_PROFILE:{
      return{
        ...state,
        profile: action.profile
      }
    }
    default:
      return state
  }
}

export const addPost = () => ({ type: ADD_POST })

export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer