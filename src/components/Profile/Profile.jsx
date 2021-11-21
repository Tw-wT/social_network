import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import s from "./Profile.module.css"

const Profile = (props) => {
    console.log(props.state.newPostText)
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.state.posts}  newPostText={props.state.newPostText} dispatch={props.dispatch} />
        </div>
    );

    
}

export default Profile;