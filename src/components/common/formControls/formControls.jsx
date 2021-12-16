import { Field } from 'formik';
import React from 'react';
import s from './formControls.module.scss';

const Element = Element => ({ field, ...props }) => {
   return (
      <span>
         <Element className={props.errors || props.status /* проверяем есть ли ошибка */ && s.errorInput} {...field} {...props} />
         {props.touched && props.errors && <p className={s.errorMassage} >{props.errors}</p>}
      </span>
   )
}

export default Element;

export const createField = (componentTextBefore, component, errors, status, touched, type, name, id, placeholder, onChange, onBlur, value, componentTextAfter) => {
   //ВАЖНО! указывать в name "contacts." +key, когда вложенность
   return <span className={s.inputContainer}>
      <label className={s.labelText} htmlFor={id}>{componentTextBefore}</label>
      <Field
         component={component}
         errors={errors}
         status={status}
         touched={touched}
         type={type}
         name={name}
         id={id}
         placeholder={placeholder}
         onChange={onChange}
         onBlur={onBlur}
         value={value}
      />
      <label htmlFor={id}>{componentTextAfter}</label>
   </span>
}
export const createFieldForSelect = (componentTextBefore, component, errors, status, touched, type, name, id, placeholder, onChange, onBlur, value, componentTextAfter, arrayOfValues) => {

   return <span className={s.inputContainer}>
      <label className={s.labelText} htmlFor={id}>{componentTextBefore}</label>
      <Field
         as="select"
         component={component}
         errors={errors}
         status={status}
         touched={touched}
         type={type}
         name={name}
         id={id}
         placeholder={placeholder}
         onChange={onChange}
         onBlur={onBlur}
         value={value}
         className={s.optionText}
      >

         {arrayOfValues.map(u => (
            <option className={s.optionText} key={u}>
               {String(u)}
            </option>
         ))}
      </Field>
      <label htmlFor={id}>{componentTextAfter}</label>
   </span>
}