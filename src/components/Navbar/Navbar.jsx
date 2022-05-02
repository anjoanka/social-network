import React from 'react';
import s from './Navbar.module.css';
import "./Navbar.css"
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink className={s.item} to="/">Profile</NavLink>
      </div>
      <div>
        <NavLink className={s.item} to="/dialogs">Messages</NavLink>
      </div>
      {/* <div className={s.item}><Link>News</Link></div>
      <div className={s.item}><Link>Music</Link></div>
      <div className={s.item}><Link>Settings</Link></div> */}
    </nav>

  )
}

export default Navbar