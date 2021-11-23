const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"

let initialState = {
  users:[
    {id: 1, followed: false, fullName: "zxc", status: "123123", location:{city:"Simferopol", country: "Ukraine"}},
    {id: 2, followed: true, fullName: "qwe", status: "123123", location:{city:"Simferopol", country: "Russia"}},
    {id: 3, followed: false, fullName: "rty", status: "123123", location:{city:"Simferopol", country: "Crimea"}}
  ]
}

export const followAC = (userId) => ({type: FOLLOW, userId })

export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})

const usersReducer = (state, action) => {
  switch(action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map( u => {
          if(u.id === action.userId){
            return {...u, followed: true}
          }           
        })
        }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map( u => {
          if(u.id === action.userId){
            return {...u, followed: false}
          }
          return u         
        })
        }
    default:
      return state
  }
}

export default usersReducer