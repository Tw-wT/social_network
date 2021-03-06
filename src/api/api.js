import * as axios from "axios"


const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "f4a32850-f819-415e-ba14-379bf4115536"
  }
})

export const usersAPI = {
  getProfile(userId){
    console.warn("Obsolete method. Please use ProfileAPI object.")
    return profileAPI.getProfile(userId)
  },
  getUsers(currentPage = 1, pageSize = 20){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
  },
  followUser(id) {  
    return instance.post(`follow/${id}`).then(response => response.data)
  },
  unFollowUser(id) {
    return instance.delete(`follow/${id}`).then(response => response.data)
  }
}

export const profileAPI ={
  getProfile(userId){
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId){
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status: status})
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  }
}