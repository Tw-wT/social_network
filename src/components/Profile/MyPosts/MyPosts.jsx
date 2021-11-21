import { compose } from '@mui/system'
import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state'
import s from "./MyPosts.module.css"
import Post from "./Post/MyPost"



const MyPosts = (props) => {  
    let postsElements = props.postsData.map(post => <Post messages={post.message} countLike={post.countLike} id={post.id} />)

    let newPostElement = React.createRef()

    let addPost = () => {        
        props.dispatch(addPostActionCreator())        
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text))
    } 

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;