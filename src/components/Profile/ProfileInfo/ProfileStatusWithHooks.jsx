import React, { useEffect, useState } from 'react';
import s from "./ProfileStatusWithHooks.module.scss";

const ProfileStatusWithHooks = (props) => {

   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);

   useEffect(() => {
      setStatus(props.status)
   }, [props.status])

   const activateEditMode = () => {
      if (props.isOwn) {
         setEditMode(true);
      }
   };

   const deactivateEditMode = () => {
      setEditMode(false);
      props.thunkUpdateStatus(status);
   };

   const onStatusChange = (e) => {
      setStatus(e.currentTarget.value);
   }

   return (
      <div className={s.status} >
         <span className={s.status__text} >Status:</span>  {
            editMode ?
               <input
                  onChange={onStatusChange}
                  autoFocus
                  value={status}
                  onBlur={deactivateEditMode}
                  className={s.status__input}
               /> :
               <span
                  className={s.status__span}
                  onClick={activateEditMode}
               >{props.status || '--'}</span>
         }
      </div>
   )

}
export default ProfileStatusWithHooks;