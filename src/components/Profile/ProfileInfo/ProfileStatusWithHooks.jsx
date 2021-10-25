import React, { useEffect, useState } from 'react';

const ProfileStatusWithHooks = (props) => {

   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);

   useEffect(() => {
      setStatus(props.status)
   }, [props.status])

   const activateEditMode = () => {
      setEditMode(true);
   };

   const deactivateEditMode = () => {
      setEditMode(false);
      props.thunkUpdateStatus(status);
   };

   const onStatusChange = (e) => {
      setStatus(e.currentTarget.value);
   }

   return (
      <div>
         {
            editMode ?
               <input onChange={onStatusChange} autoFocus value={status} onBlur={deactivateEditMode} input /> :
               <span onClick={activateEditMode} >{props.status || 'Нет статуса'}</span>
         }
      </div>
   )

}
export default ProfileStatusWithHooks;