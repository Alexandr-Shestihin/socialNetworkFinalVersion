import React from 'react';
import s from "./../Dialogs.module.scss";

const Massages = (props) => {
   return (
      <div className={s.message}>{props.messages}</div>
   )
}

export default Massages;