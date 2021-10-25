import React from 'react';
import UserPhoto from './../../assets/image/userPhoto.jpg';
import { NavLink } from 'react-router-dom';
import s from './User.module.scss';

const User = ({ user, props }) => {
   return (
      <div key={user.id}>
         <span>
            <div> <NavLink to={'/profile/' + user.id} >
               <img src={user.photos.small != null ? user.photos.small : UserPhoto} className={s.usersPhoto} />
            </NavLink>
            </div>
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
         </span>
         <span>
            <span>
               <div>{user.name}</div>
               <div>{user.status}</div>
            </span>
            <span>
               <div>{/* user.location.country */}</div>
               <div>{/* user.location.city */}</div>
            </span>
         </span>
         <br /><br />
      </div>)
}


export default User;