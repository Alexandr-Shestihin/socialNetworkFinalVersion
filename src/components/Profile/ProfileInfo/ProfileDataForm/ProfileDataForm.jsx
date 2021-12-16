import React from 'react';
import s from "./ProfileDataForm.module.scss";
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from 'formik';
import * as yup from 'yup';
import Element, { createField, createFieldForSelect } from '../../../common/formControls/formControls';

const Input = Element('input');
const Textarea = Element('textarea');
const Select = Element('select');

const ProfileDataForm = ({ profile, deactivateEditMode, thunkSaveProfile }) => {

   const validationSchema = yup.object().shape({

   })

   return (
      <Formik
         initialValues={{
            aboutMe: profile.aboutMe,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            fullName: profile.fullName,
            lookingForAJob: profile.lookingForAJob,


         }}
         validateOnBlur
         onSubmit={(values, { setSubmitting, setStatus }) => {
            thunkSaveProfile(values, setStatus)

            setSubmitting(false)

         }}
         validationSchema={validationSchema}
      >
         {({ values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
            status,
            isSubmitting
         }) => (
            <form
               onSubmit={handleSubmit}
               className={s.descriptionBlock__Container}
            >

               <h1>
                  {createField('Full Name: ', Input, errors.fullName, status, touched.fullName, "fullName", "fullName", "fullName", null, handleChange, handleBlur, values.fullName, null, null)}
               </h1>

               <div className={s.descriptionBlock__itemContainer}>
                  <div className={s.descriptionBlock__item}>
                     <b className={s.descriptionBlock__item_text} >Контакты</b>
                     <p className={s.errorMassage}>{status}</p>
                     {Object.keys(profile.contacts).map(u => (
                        <div key={u}>
                           {createField(u + ": ", Input, errors.u, status, touched.u, u, "contacts." + u,
                              //ВАЖНО! указывать в name "contacts." +key, когда вложенность
                              u, u, handleChange, handleBlur, values.u, null, null)}
                        </div>
                     ))}

                  </div>

                  <div className={s.descriptionBlock__aboutMeContainer}>

                     <div className={s.descriptionBlock__aboutMe}>
                        {createField('About me: ', Textarea, errors.aboutMe, status, touched.aboutMe, "aboutMe", "aboutMe", "aboutMe", null, handleChange, handleBlur, values.aboutMe, null, null)}
                     </div>

                     <div className={s.descriptionBlock__lookingForAJob}>

                        {createFieldForSelect('Are you loking for a job? ', Select, errors.lookingForAJob, status, touched.lookingForAJob, null, null, 'lookingForAJob', null, handleChange, handleBlur, values.lookingForAJob, null, [profile.lookingForAJob, !profile.lookingForAJob])}
                     </div>
                     <div className={s.descriptionBlock__skils}>
                        {createField('My professional skils: ', Textarea, errors.lookingForAJobDescription, status, touched.lookingForAJobDescription, "lookingForAJobDescription", "lookingForAJobDescription", "lookingForAJobDescription", null, handleChange, handleBlur, values.lookingForAJobDescription, null, null)}

                     </div>
                     <div>
                        <button
                           className={s.descriptionBlock__btn}
                           onClick={handleSubmit}
                           type='submit'
                           disabled={isSubmitting}
                        >save &#128190;</button>
                     </div>
                  </div>
               </div>

            </form>
         )}

      </Formik>

   )
}
export default ProfileDataForm;