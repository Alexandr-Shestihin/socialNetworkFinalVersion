import React from 'react';
import s from "./Post.module.scss";

const Post = (obj) => {

   let delPost = () => {
      obj.deletePost(obj.key);
   }

   return (
      <div className={s.item}>
         <img src={"https://sun9-22.userapi.com/impf/c857428/v857428728/c1d38/YAhH1xwuFYI.jpg?size=1280x960&quality=96&sign=9dd73da1d10e6c080b827595a160c7be&type=album"} />
         <span className={s.massage}>{obj.massage}</span>
         <div>
            <button className={s.likes}>Likes: {obj.likes}</button>
         </div>
      </div>
   )
}
export default Post;