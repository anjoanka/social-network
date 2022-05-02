import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const posts = [
  {id: 1, message: 'Hi, how are you?'},
  {id: 2, message: "it's my first project!"}
]

const dialogs = [
  { id: 1, name: 'Andriana' },
  { id: 2, name: 'Dimych' },
  { id: 3, name: 'Olya' },
  { id: 4, name: 'Nastia' },
  { id: 5, name: 'Andriy' },
  { id: 6, name: 'Ivan' }
]

const messages = [
  { id: 1, message: 'hello' },
  { id: 2, message: 'hi' },
  { id: 3, message: ':)' },
]

ReactDOM.render(
  <BrowserRouter>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
