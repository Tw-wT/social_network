import React from 'react';
import s from "./MyPost.module.css"

const MyPost = (props) => {    
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src="https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png" alt="" />
                { props.messages }
                <div>
                    <span>like: {props.countLike}</span>
                </div>
            </div>
        </div> 
    );
}

export default MyPost;