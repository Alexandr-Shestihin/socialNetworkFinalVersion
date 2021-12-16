import React from 'react';
import s from "./Nav.module.scss";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
   let siteBarElements = props.siteBar.names.map(e => <div className={s.item__Block}>{e.name}</div>);
   return (
      <nav className={s.nav}>
         <div className={s.item}>
            <NavLink to="/Profile" className={s.item} activeClassName={s.active}>Profile</NavLink>
         </div>

         <div className={s.item}>
            <NavLink to="/Dialogs" activeClassName={s.active}>Massages</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to='/Users' activeClassName={s.active} >Users</NavLink>
         </div>
         <div className={`${s.item}`}>
            <NavLink to="/News" activeClassName={s.active}>News</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/Music" activeClassName={s.active}>Music</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/Settings" activeClassName={s.active}>Settings</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/For_css" activeClassName={s.active}>For_css</NavLink>
         </div>
         {/* <div className={s.item}>
            <NavLink to="/forFormik" activeClassName={s.active}>ForFormik</NavLink>
         </div> */}
         <div className={`${s.item} ${s.item__friends}`}>
            <h2>Frients</h2>
            <div className={s.item__mainBlock}>
               {siteBarElements}
            </div>
         </div>
      </nav>
   )
}
export default Nav;
