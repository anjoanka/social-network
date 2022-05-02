import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='' element={<Profile posts={props.posts}/>} />
          <Route path='/dialogs/*' element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>} />
        </Routes>
      </div>
    </div >

  );
}

export default App;
