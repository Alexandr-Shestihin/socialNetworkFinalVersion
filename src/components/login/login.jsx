import React from 'react';
import s from './login.module.scss';
import { Formik } from 'formik';
import * as yup from 'yup';
import Element, { createField } from '../common/formControls/formControls';
import { Redirect } from 'react-router-dom';

const Input = Element('input');

const Login = (props) => {
   return (
      <div className={s.form}>
         <h1 className={s.form__login}>Login</h1>
         <LoginForm {...props} />
      </div>
   )
}

export const LoginForm = ({ isAuth, login, password, thunkLogin, captchaUrl }) => {
   //сделана деструктуризация: вместо props были в объекте прокинуты сво-ва
   const validationSchema = yup.object().shape({
      login: yup.string().min(5, "минимум 5 символов").email('Не email').required('Обязательно'),
      password: yup.string().min(10, "минимум 10 символов").required('Обязательно'),
   })
   if (isAuth) return <Redirect to={"/profile"} />

   return (
      <Formik
         initialValues={{ login: login, password: password }}
         validationSchema={validationSchema}
         onSubmit={(values, { setSubmitting, setStatus }) => {
            thunkLogin(values.login, values.password, values.isAuth, values.captcha, setStatus);
            setSubmitting(false);
            values.captcha = null;
         }}
      >
         {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            status,
         }) => (
            <form onSubmit={handleSubmit}>
               <p className={s.errorMassage}>{status}</p>

               <div>
                  {createField(null, Input, errors.login, status, touched.login, "login", "login", "login", 'Login', handleChange, handleBlur, values.login)}
               </div>

               <div className={s.form__elem}>
                  {createField(null, Input, errors.password, status, touched.password, "password", "password", "Password", "Password", handleChange, handleBlur, values.password)}
               </div>

               {/* <div className={s.form__elem}>
                  {createField(null, Input, null, null, null, "checkbox", "rememberMe", "rememberMe", "rememberMe", handleChange, handleBlur, null, 'remember me')}
               </div> */}

               <button
                  className={s.form__elem}
                  type="submit"
                  disabled={isSubmitting}
               >Submit</button>

               {captchaUrl && <div>
                  < img className={s.captchaImg} src={captchaUrl} alt="" />
                  {createField(null, Input, errors.captcha, status, touched.captcha, "captcha", "captcha", "captcha", ' Captcha', handleChange, handleBlur, values.captcha)}
                  <p className={s.errorMassage}>{status}</p>
               </div>}




            </form>
         )}
      </Formik >
   )
}

export default Login;
