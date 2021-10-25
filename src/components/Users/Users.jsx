import React from 'react';
import Preload from './../common/preload/Preload';
import Paginator from './../common/Paginator/Paginator';
import User from './User';

const Users = (props) => {

   return (
      <div>
         <Paginator {...props} />
         {props.isFetching ? <Preload /> : null}
         {
            props.users.map(u => <User props={props} user={u} />)
         }
      </div >
   )
}

export default Users;