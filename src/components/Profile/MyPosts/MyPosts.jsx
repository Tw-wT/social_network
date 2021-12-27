import React from 'react'
import s from "./MyPosts.module.css"
import Post from "./Post/MyPost"
import { Field, reduxForm } from "redux-form"
import { required, maxLengthCreator } from '../../../utils/validators/validators'
import { TextArea } from '../../Common/FormsControls/FormsControls'

const maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props) => {
   return(
   <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Введите текст"} name={"newPostText"} component={TextArea} validate={[required, maxLength10]} />
        </div>
        <div>
            <button>Отправить</button>
        </div>
    </form>
   )
}

AddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

const MyPosts = (props) => {  
    let postsElements = props.postsData.map(post => <Post messages={post.message} countLike={post.countLike} id={post.id} />)

    let onAddPost = (values) => {        
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;