import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  // const posts = [
  //   {id: 1, message: 'Hi, how are you?'},
  //   {id: 2, message: "it's my first project!"}
  // ]

  const postsELements = 
  props.posts.map( p => <Post message ={p.message} likeCount={p.likeCount} />)

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are you?" likeCount='0' />
        <Post message="it's my first project!" likeCount='12' />
      </div>




    </div>
  )
}

export default MyPosts