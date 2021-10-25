import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { Redirect } from 'react-router-dom';

const Profile = (props) => {
   if (!props.isAuth) return <Redirect to={"/login"} />

   return (
      <div>
         <ProfileInfo profile={props.profile} status={props.status} thunkUpdateStatus={props.thunkUpdateStatus} />
         <MyPostsContainer status={props.status} thunkUpdateStatus={props.thunkUpdateStatus} />
      </div>
   )
}
export default Profile;