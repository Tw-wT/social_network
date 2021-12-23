import React from 'react'
import { connect } from 'react-redux'
import { addPost, updateNewPostText } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'


const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, { updateNewPostText, addPost })(MyPosts)

export default MyPostsContainer