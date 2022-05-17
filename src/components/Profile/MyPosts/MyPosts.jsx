import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  // const posts = [
  //   {id: 1, message: 'Hi, how are you?'},
  //   {id: 2, message: "it's my first project!"}
  // ]

  const postsELements = 
  props.posts.map( p => <Post message ={p.message} likeCount={p.likeCount} addPost={props.addPost}/>)

  const newPostElement = React.createRef();

  let addPost = () => {
    const action = {type: "ADD-POST"}
    props.dispatch(action);
  }

  let onPostChange = () => {
    const text = newPostElement.current.value;
    const action = {type: 'UPDATE-NEW-POST-TEXT', newText: text} 
    props.dispatch(action);
  }


  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea 
          onChange={onPostChange}
          ref={newPostElement} 
          value={props.newPostText} />
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsELements}
      </div>




    </div>
  )
}

export default MyPosts