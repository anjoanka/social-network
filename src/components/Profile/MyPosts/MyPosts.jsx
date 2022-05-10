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
    props.addPost();
  }

  let onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
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