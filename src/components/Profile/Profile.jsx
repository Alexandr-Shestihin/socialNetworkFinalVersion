import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { Redirect } from 'react-router-dom';

const Profile = (props) => {
   if (!props.isAuth) return <Redirect to={"/login"} />

   return (
      <div>
         <ProfileInfo
            profile={props.profile}
            status={props.status}
            thunkUpdateStatus={props.thunkUpdateStatus}
            isOwn={props.isOwn}
            thunkSavePhoto={props.thunkSavePhoto}
            thunkSaveProfile={props.thunkSaveProfile}
            editMode={props.editMode}
            setEditMode={props.setEditMode}
         />

         {!props.isOwn || <MyPostsContainer
            profile={props.profile}
            status={props.status}
            thunkUpdateStatus={props.thunkUpdateStatus}
         />}
         {/* Да, я пока не нашёл другого варианта, как скрыть MyPostsContainer, если я не в своём профиле. Пока я не умею отображать чужие посты, то зачем мне смотреть свои в чужом профиле? */}
      </div>
   )
}
export default Profile;