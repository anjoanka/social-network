import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://w7.pngwing.com/pngs/832/44/png-transparent-advertising-service-blog-internet-avatar-woman-face-black-hair-service-thumbnail.png" alt="" />
      {props.message}
      <div>
        {props.counterLike}
      </div>
    </div>
  )
}

export default Post