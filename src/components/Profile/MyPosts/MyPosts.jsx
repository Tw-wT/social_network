import React from 'react'
import s from "./MyPosts.module.css"
import Post from "./Post/MyPost"
import { Field, reduxForm } from "redux-form"


const PostForm = (props) => {
   return(
   <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Введите текст"} name={"postText"} component={"input"}  />
        </div>
        <div>
            <button>Отправить</button>
        </div>
    </form>
   )
}

const NewPostForm = reduxForm({form: "post"})(PostForm)

const MyPosts = (props) => {  
    let postsElements = props.postsData.map(post => <Post messages={post.message} countLike={post.countLike} id={post.id} />)

    let newPostElement = React.createRef()

    let onAddPost = () => {        
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    } 

    const onPostSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <NewPostForm onSubmit={onPostSubmit} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;