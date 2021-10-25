import React from 'react';
import s from "./Learn.module.scss";

const Learn = (props) => {
   ///////////Калькулятор//////////////
   let sum;
   let minus;

   let resultCalc = React.createRef();

   let addOne = () => { resultCalc.current.value += 1 };
   let addTwo = () => { resultCalc.current.value += 2 };
   let addThree = () => { resultCalc.current.value += 3 };
   let addFour = () => { resultCalc.current.value += 4 };
   let addFive = () => { resultCalc.current.value += 5 };
   let addSix = () => { resultCalc.current.value += 6 };
   let addSeven = () => { resultCalc.current.value += 7 };
   let addEight = () => { resultCalc.current.value += 8 };
   let addNine = () => { resultCalc.current.value += 9 };
   let addZero = () => { resultCalc.current.value += 0 };

   let summarize = () => {
      sum = +resultCalc.current.value;
      resultCalc.current.value = '';
   };
   let subtract = () => {
      minus = +resultCalc.current.value;
      resultCalc.current.value = "";
   }
   let showResult = () => {
      let totalКesult = +resultCalc.current.value;
      if (sum) {
         resultCalc.current.value = totalКesult + sum;
         sum = 0;
      } else resultCalc.current.value = minus - totalКesult;
      minus = 0;
   }
   let clean = () => {
      resultCalc.current.value = "";
      sum = 0;
      minus = 0;
   };
   ///////////Шифратор//////////////
   function encoder(str, pass) {
      let i = pass;
      if ((String(i).length < 8) && i) {
         let result = '';
         for (let key of str) {
            let resultIss = key.codePointAt() + pass - (pass / 2) + (pass ** (1 / 2));
            result += String.fromCodePoint(resultIss.toFixed(0))
         }
         return result;
      } else
         return 'Пароль не соответствует требованиям!';
   }

   function decoder(str, pass) {
      let result = '';
      for (let key of str) {
         let resultIccDecoder = key.codePointAt();
         resultIccDecoder = resultIccDecoder - pass + (pass / 2) - (pass ** (1 / 2))
         result += String.fromCodePoint(resultIccDecoder.toFixed(0))
      }
      return result
   }

   let text = React.createRef();
   let resultCod = React.createRef();
   let totalResultDecoder = React.createRef();
   let showResultCod = () => {
      totalResultDecoder.current.value = encoder(text.current.value, +resultCod.current.value);
   }
   let showResultDeCod = () => {
      totalResultDecoder.current.value = decoder(text.current.value, +resultCod.current.value);
   }
   let deleteText = () => {
      text.current.value = '';
      resultCod.current.value = '';
      totalResultDecoder.current.value = '';
   }

   return (
      <div className={s.value}>
         <div>Введите сообщения для кодировки: </div>
         <textarea ref={text} />
         <div>Введите пароль из числа (ДО 7-Х СИМВОЛОВ): </div>
         <input ref={resultCod} placeholder="Пароль" />
         <div>Результат: </div>
         <textarea ref={totalResultDecoder} />
         <button
            onClick={showResultCod}
            className={s.mainButton}
         >Зашифровать!</button>
         <button
            className={s.mainButton}
            onClick={showResultDeCod}
         >Дешифровать!</button>
         <button
            className={s.mainButton}
            onClick={deleteText}
         >Очистить!</button>


         <br /><br /><br /><br />
         <input ref={resultCalc} type="text" /><br />
         <button onClick={addOne}>1</button>
         <button onClick={addTwo}>2</button>
         <button onClick={addThree}>3</button>
         <button onClick={summarize}>+</button><br />
         <button onClick={addFour}>4</button>
         <button onClick={addFive}>5</button>
         <button onClick={addSix}>6</button>
         <button onClick={subtract}>-</button><br />
         <button onClick={addSeven}>7</button>
         <button onClick={addEight}>8</button>
         <button onClick={addNine}>9</button>
         <button onClick={showResult}>=</button><br />
         <button onClick={addZero}>0</button>
         <button onClick={clean}>Сброс</button>
      </div >
   )
}
export default Learn;