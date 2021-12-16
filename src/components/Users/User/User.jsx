import React from 'react';
import UserPhoto from './../../../assets/image/userPhoto.jpg';
import { NavLink } from 'react-router-dom';
import s from './User.module.scss';

const User = ({ user, props }) => {

   return (
      <div className={s.userMainContainer} key={user.id}>

         <NavLink to={'/profile/' + user.id} >
            <img src={user.photos.small != null ? user.photos.small : UserPhoto} className={s.usersPhoto} />
         </NavLink>

         <div>
            {user.followed
               ? <button
                  disabled={props.followedInProgress.some(s => s === user.id)}
                  onClick={() => { props.onUnfollow(user.id) }} className={`${s.buttonUnfallow} ${s.button}`}
               >Unfallow</button>
               : <button disabled={props.followedInProgress.some(s => s === user.id)}
                  onClick={() => { props.onfollow(user.id) }}
                  className={`${s.buttonFallow} ${s.button}`}
               >Fallow</button>}
         </div>

         <div cladivssName={s.userContainer__text}>{user.name}</div>
         <div cladivssName={s.userContainer__text}>{user.status}</div>

         {/* <span>
               <div>{ user.location.country }</div>
               <div>{ user.location.city }</div>
            </span> */}

      </div>)
}


export default User;