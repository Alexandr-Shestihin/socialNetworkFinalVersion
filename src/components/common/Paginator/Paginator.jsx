import React, { useState } from 'react';
import s from './Paginator.module.scss';

const Paginator = (props, { portionSize = 10 }) => {
   props.setPageCount(props.totalItemsCount, props.pageSize)

   let arrayPage = [];
   for (let i = 1; i <= props.pagesCount; i++) {
      arrayPage.push(i);
   }
   let portionCount = Math.ceil(props.pagesCount / portionSize);
   let [portionNumber, setPortionNumber] = useState(1);
   let leftBorder = ((portionNumber - 1) * (portionSize));
   let rightBorder = (portionNumber * portionSize);

   return (

      <div className={s.paginationButton}>
         <select onChange={(e) => props.showCountUsersOnPage(e.target.value)} name="lavel" title='Сколько пользователей выводить на одной странице.' >
            {props.selectCount.map(u => <option value={u}>{u}</option>)}
         </select>

         {portionNumber > 1 ? <button onClick={() => setPortionNumber(portionNumber - 1)}>{'<'}</button> : false}

         {arrayPage
            .filter(p => p >= leftBorder && p <= rightBorder)
            .map(a => {
               return <button className={props.currentPage === a && s.paginationButton_active} onClick={() => props.showPage(a)} >{a}</button>
            })}

         {portionNumber < portionCount ? <button onClick={() => { setPortionNumber(portionNumber + 1) }}>{'>'}</button> : false}


      </div>
   )
}

export default Paginator;