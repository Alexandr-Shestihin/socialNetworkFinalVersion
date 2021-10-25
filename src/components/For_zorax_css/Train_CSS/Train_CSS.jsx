import React from 'react';
import s from "./Train_CSS.module.scss";
//import _null_style from "./_null_style.module.scss";

const Train_CSS = (props) => {
   let sumInput = () => {
      let arr = []
      let value;
      for (; true;) {
         value = prompt('', '');
         if (typeof value != 'string' || value !== null) {
            arr.push(value)
         } else if (value == null) break;
      }
      alert(value);
   }
   //sumInput()
   return (
      <div className={s.value}>
         <div className={s.exampleBlock}>
            Блочный тег<br />
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus hic iure in, repellendus nemo voluptatibus quas, ea reprehenderit alias eum nesciunt odit ratione iusto iste amet itaque magni, placeat ab!
</div>
         <div className={s.exampleString}>
            Строчный тег<br />
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus hic iure in, repellendus nemo voluptatibus quas, ea reprehenderit alias eum nesciunt odit ratione iusto iste amet itaque magni, placeat ab!
</div>
      </div>
   )
}
export default Train_CSS;