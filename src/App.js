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

          <Route path='' element={
            <Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
              updateNewPostText={props.updateNewPostText}
            />} />

          <Route path='/dialogs/*' element={
            <Dialogs state={props.state.dialogsPage}


            />} />

        </Routes>
      </div>
    </div >

  );
}

export default App;
