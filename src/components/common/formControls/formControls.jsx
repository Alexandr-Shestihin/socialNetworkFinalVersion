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

export const createField = (component, errors, status, touched, type, name, id, placeholder, onChange, onBlur, value, componentText) => {
   debugger
   return <div className={s.inputContainer}>
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
      /><label htmlFor={id}>{componentText}</label>
   </div>
}