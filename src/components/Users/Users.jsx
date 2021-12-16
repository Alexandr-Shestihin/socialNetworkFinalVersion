import React from 'react';
import Preload from './../common/preload/Preload';
import Paginator from './../common/Paginator/Paginator';
import User from './User/User';
import s from './Users.module.scss';

const Users = (props) => {

   return (
      <div>
         <Paginator {...props} />
         {props.isFetching ? <Preload /> : null}

         <div className={s.usersContainer} >
            {props.users.map(u => <User props={props} user={u} />)}
         </div >

      </div >
   )
}

export default Users;