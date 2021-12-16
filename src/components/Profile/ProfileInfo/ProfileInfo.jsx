import React, { useState } from 'react';
import s from "./ProfileInfo.module.scss";
import UserPhoto from './../../../assets/image/userPhoto.jpg';
import Preload from '../../common/preload/Preload';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm'

const ProfileInfo = ({ profile, thunkUpdateStatus, status, isOwn, thunkSavePhoto, thunkSaveProfile, editMode, setEditMode }) => {

   //let [editMode, setEditMode] = useState(false);

   if (profile.length === 0) {
      return <Preload />
   }
   const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
         thunkSavePhoto(e.target.files[0])
      }
   }

   return (
      <div className={s.descriptionBlock}>
         <div className={s.descriptionBlock__container}>

            <div className={s.descriptionBlock__photoBlock}>
               <img className={s.mainPfoto} src={profile.photos.large || UserPhoto} />
               {isOwn && <input
                  className={s.descriptionBlock__input}
                  type="file"
                  accept="image/x-png,image/gif,image/jpeg"
                  onChange={onMainPhotoSelected}
               />}
            </div>

            <div>

               {
                  editMode ?
                     <ProfileDataForm
                        profile={profile}
                        thunkSaveProfile={thunkSaveProfile}
                     //deactivateEditMode={() => { setEditMode(false) }}
                     /> :
                     <ProfileData
                        isOwn={isOwn}
                        profile={profile}
                        activateEditMode={() => { setEditMode(true) }}
                     />
               }


            </div>

         </div>

         <ProfileStatusWithHooks
            thunkUpdateStatus={thunkUpdateStatus}
            status={status}
            isOwn={isOwn}
         />
      </div>
   )
}



const ProfileData = ({ profile, isOwn, activateEditMode, contacts }) => {
   return (
      <div className={s.descriptionBlock__itemContainer}>
         <h1>{profile.fullName}</h1>
         <div className={s.descriptionBlock__flexContainer}>

            <div className={s.descriptionBlock__item}>

               <span className={s.descriptionBlock__item_text} >Контакты</span>

               {Object.keys(profile.contacts).map(u => (
                  <div key={u}>
                     {u}: {profile.contacts[u]}
                  </div>
               ))}
            </div>

            <div className={s.descriptionBlock__aboutMe}>
               <b className={s.descriptionBlock__item_text} >About me:</b>  <span>{profile.aboutMe}</span>
               <div className={s.descriptionBlock__lookingForAJob}>
                  <br />
                  <b>{"I " + (profile.lookingForAJob ? "'am looking for a job" : " 'don't looking for a job")}</b>
                  <br />
                  {profile.lookingForAJobDescription ? "Because my professional skils " + (profile.lookingForAJobDescription) : false}
               </div>

            </div>
         </div>

         <div className={s.btnBlock}>
            {!isOwn || <div>
               <button
                  className={s.btnBlock__btn}
                  onClick={activateEditMode} >
                  edit &#9998;
               </button>
            </div>}
         </div>

      </div>
   )
}

export default ProfileInfo;