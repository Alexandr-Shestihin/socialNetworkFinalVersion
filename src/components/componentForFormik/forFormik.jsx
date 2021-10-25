import React from 'react';
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from 'formik';
import * as yup from 'yup';
import Element from '../common/formControls/formControls';

const Input = Element('input');

const ForFormik = (props) => {
   const validationSchema = yup.object().shape({
      name: yup.string().matches(
         /^[a-zA-ZаА-яЯ0-9]+$/,
         'Недопустимые символы'
      ).required('Обязательно'),
      tel: yup.string()
         .matches(/^[0-9]+$/, "Интересный номер")
         .min(11, 'Номер должен быть минимум 11 цифр')
         .max(12, 'Некорректный номер')
         .required('Укажите телефон'),
      password: yup.string().required('Обязательно'),
      confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно'),
      email: yup.string().email('Не корректный email').required('Обязательно'),
   })

   return (
      <div>
         <Formik
            initialValues={{
               name: 'Александр',
               tel: '89263777708',
               password: '123',
               email: 'shestihin@mail.ru',
               confirmPassword: '123',
            }}
            validateOnBlur
            onSubmit={(values) => {
               console.log(values);
            }}
            validationSchema={validationSchema}
         >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
               <form onSubmit={handleSubmit}>
                  <div>
                     <p>
                        <label htmlFor="name">Имя</label>
                        <Field
                           component={Input}
                           errors={errors.name}
                           type={'name'}
                           name={'name'}
                           id={'name'}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.name}
                           touched={touched.name}
                        />

                     </p>
                  </div>

                  <div>
                     <p>
                        <label htmlFor="email">Почта</label>
                        <Field
                           component={Input}
                           errors={errors.email}
                           type={'text'}
                           name={'email'}
                           id={'email'}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.email}
                           touched={touched.email}
                        />
                     </p>
                  </div>
                  <div>
                     <p>
                        <label htmlFor="tel">Телефон</label>
                        <Field
                           component={Input}
                           errors={errors.tel}
                           type={'tel'}
                           name={'tel'}
                           id={'tel'}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.tel}
                           touched={touched.tel}
                        />
                     </p>
                  </div>
                  <div>
                     <label htmlFor="password">Пароль</label>
                     <Field
                        component={Input}
                        errors={errors.password}
                        type={'password'}
                        name={'password'}
                        id={'password'}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        touched={touched.password}
                     />
                  </div>
                  <div>
                     <label htmlFor="confirmPassword">Подтвердите пароль</label>
                     <Field
                        component={Input}
                        errors={errors.confirmPassword}
                        type={'password'}
                        name={'confirmPassword'}
                        id={'confirmPassword'}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                        touched={touched.confirmPassword}
                     />
                  </div>
                  <button
                     disabled={!isValid && !dirty}
                     onClick={handleSubmit}
                     type={'submit'}
                  >Отправить</button>

               </form>
            )}

         </Formik>
      </div>

   )
}

export default ForFormik;