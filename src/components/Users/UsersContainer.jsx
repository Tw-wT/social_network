import React from "react"
import { connect } from "react-redux"
import { follow, setCurrentPage, setUsers, unFollow, setTotal, setTotalCount, toggleIsFetching } from "../../redux/users-reducer"
import Users from "./Users"
import axios from "axios"
import Preloader from "../Common/Preloader/Preloader"

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true)

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(response.data.items)
      this.props.setTotalCount(response.data.totalCount)
    })
  }

  onPageChanged = (number) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(number)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${number}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(response.data.items)
    })
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />}
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unFollowAC(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (page) => {
//       dispatch(setCurrentPageAC(page))
//     },
//     setTotalCount: (usersCount) => {
//       dispatch(setTotalCountAC(usersCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     }
//   }
// }

export default connect(mapStateToProps, { follow, unFollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching })(UsersContainer)