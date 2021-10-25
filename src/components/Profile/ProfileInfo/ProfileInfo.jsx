import React from 'react';
import s from "./ProfileInfo.module.scss";
import UserPhoto from './../../../assets/image/userPhoto.jpg';
import Preload from '../../common/preload/Preload';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({ profile, thunkUpdateStatus, status }) => {
   if (profile.length === 0) {
      return <Preload />
   }
   return (
      <div className={s.descriptionBlock}>
         <img src={profile.photos.large != null ? profile.photos.large : UserPhoto} />
         <ProfileStatusWithHooks thunkUpdateStatus={thunkUpdateStatus} status={status} />
      </div>
   )
}
export default ProfileInfo;