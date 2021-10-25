import React from 'react';
import Learn from "./Learn/Learn";
import s from "./For_zorax_css.module.scss";
import Train from "./Train/Train";
import Train_CSS from './Train_CSS/Train_CSS';
import { NavLink, Route } from 'react-router-dom';

const For_zorax_css = () => {

   return (
      <div className={s.main}>
         <NavLink to='/For_zorax_css/Train_CSS'>Train_CSS</NavLink>
         <Route path='/For_zorax_css/Train_CSS' render={() => <Train_CSS />} />
         <br />
         <NavLink to='/For_zorax_css/Train'>Train</NavLink>
         <Route path='/For_zorax_css/Train' render={() => <Train />} />

         <div className={s.squere}></div>
         <div className={`${s.squere} ${s.squere_s} `}></div>
         <div className={s.wrapper}>
            <div className={s.cube}>
               <div className={s.site + " " + s.site1}>1</div>
               <div className={s.site + " " + s.site2}>2</div>
               <div className={s.site + " " + s.site3}>3</div>
               <div className={s.site + " " + s.site4}>4</div>
               <div className={s.site + " " + s.site5}>5</div>
               <div className={s.site + " " + s.site6}>6</div>
            </div>
         </div>

         <Learn />
      </div >)
}
export default For_zorax_css;