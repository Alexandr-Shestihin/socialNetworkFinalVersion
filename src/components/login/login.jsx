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
         <h1>Login</h1>
         <LoginForm {...props} />
      </div>
   )
}

export const LoginForm = ({ isAuth, login, password, thunkLogin }) => {
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
            thunkLogin(values.login, values.password, values.isAuth, setStatus);
            setSubmitting(false);
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

               {createField(Input, errors.login, status, touched.login, "login", "login", "login", 'Login', handleChange, handleBlur, values.login)}

               {createField(Input, errors.password, status, touched.password, "password", "password", "Password", "Password", handleChange, handleBlur, values.password)}

               {createField(Input, null, null, null, "checkbox", "rememberMe", "rememberMe", "rememberMe", handleChange, handleBlur, null, 'remember me')}

               {/* <div className={s.inputContainer}>
                  <Field
                     component={Input}
                     errors={errors.password}
                     status={status}
                     touched={touched.password}
                     type="password"
                     name="password"
                     id="password"
                     placeholder="Password"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.password}
                  />
               </div> */}
               {/* <div className={s.inputContainer}>
                  <Field component="input" type="checkbox" name="rememberMe" id="rememberMe" /><label htmlFor="rememberMe">remember me</label></div> */}
               <br />
               <button type="submit" disabled={isSubmitting}>Submit</button>
            </form>
         )}
      </Formik >
   )
}

export default Login;
