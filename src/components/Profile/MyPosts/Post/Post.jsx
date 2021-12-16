import React from 'react';
import UserPhoto from './../../../../assets/image/userPhoto.jpg';
import s from "./Post.module.scss";

const Post = (obj) => {

   let delPost = () => {
      obj.deletePost(obj.key);
   }

   return (
      <div className={s.item}>

         <div className={s.item__flexContainer}>
            <img src={obj.photos ? obj.photos.small : UserPhoto} />
            <button className={s.likes}>Likes: {obj.likes}</button>
         </div>
         <div className={s.massage}>{obj.massage}</div>



      </div>
   )
}
export default Post;