import React from 'react';
import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = (props) => {
   return (
      <header className={s.header}>
         <div className="content">
            <div className={s.headerContainer}>
               <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v294-bb-41_2.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=2bc156f682aa70a342ce9e707c613927" />
               <span className={s.loginBlock}>
                  {props.isAuth ? <span className={s.loginBlockLink} >
                     {props.login}
                     <button onClick={props.thunkLogout} >Log out</button>
                  </span> : <NavLink to="/Login" className={s.loginBlockLink} >Login</NavLink>}
               </span>
            </div>

         </div>
      </header>
   )
}
export default Header;