import React from "react"
import { connect } from "react-redux"
import { follow, setCurrentPage, unFollow, toggleIsFollowingProgress, getUsers } from "../../redux/users-reducer"
import Users from "./Users"
import Preloader from "../Common/Preloader/Preloader"


class UsersContainer extends React.Component {
 
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (number) => {
    this.props.getUsers(number, this.props.pageSize)
    this.props.setCurrentPage(number)
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
        unFollow={this.props.unFollow}        
        followingInProgress={this.props.followingInProgress}
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
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default connect(mapStateToProps, { follow, unFollow, setCurrentPage, toggleIsFollowingProgress, getUsers: getUsers })(UsersContainer)