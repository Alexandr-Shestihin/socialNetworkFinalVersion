import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./../Dialogs.module.scss";

const DialogItem = (obj) => {
   let path = "/Dialogs/" + obj.id
   return (
      <div >
         <NavLink to={path} className={s.dialog} activeClassName={s.active}>{obj.name}</NavLink>
      </div>
   )
}

export default DialogItem;