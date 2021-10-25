import React from 'react';
import preload from './../../../assets/image/757.svg'
import s from './Preload.module.scss';

const Preload = () => {
   return (
      <div >
         <img src={preload} className={s.container} />
      </div>

   )
}
export default Preload;