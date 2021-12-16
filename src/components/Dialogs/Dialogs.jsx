import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Massages from './Massages/Massages';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Redirect } from 'react-router-dom';
import s from "./Dialogs.module.scss";
import * as yup from 'yup';
import Element from '../common/formControls/formControls';
import companionImage from "../../assets/image/companion.jpg";

const Textarea = Element('textarea');

const Dialogs = (props) => {
   let messagesElements = props.dialogsPage.massages.map(m => <Massages messages={m.massage} key={m.id} />);


   let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);

   let addNewMassage = (text) => {
      props.addMassageActionCreator(text)
   }

   if (!props.isAuth) return <Redirect to={"/login"} />
   return (
      <div className={s.dialogs}>

         <div className={s.dialogs__flexContainer}>
            <div className={s.dialogs_items}>
               {dialogsElements}
            </div>

            <div className={s.dialogs__massagesContainer}>

               <div className={s.dialogs__companionContainer}>
                  <div className={s.dialogs__companionImageContainer}>
                     <img src={companionImage} alt="" />
                  </div>
                  <span>Cat</span>
               </div>

               <div className={s.dialogs__massages}>
                  <div>{messagesElements}</div>
               </div>

               <AddMassageForm {...props} addNewMassage={addNewMassage} />
            </div>
         </div>


      </div>
   )
}

const AddMassageForm = (props) => {
   /* let messagesElements = props.dialogsPage.massages.map(m => <Massages messages={m.massage} key={m.id} />); */

   const submit = (values, { setSubmitting }) => {
      props.addNewMassage(values.massage);
      values.massage = '';
      setSubmitting(false);
   }
   const validationSchema = yup.object().shape({
      massage: yup.string().required('Обязательно'),
   })
   return (
      <div className={s.messages}>
         {/* <div>{messagesElements}</div> */}
         <div>
            <Formik
               initialValues={{ massage: '' }}
               onSubmit={submit}
               validationSchema={validationSchema}
            >
               {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
               }) => (
                  <form
                     onSubmit={handleSubmit}
                     className={s.addMassageForm}
                  >
                     <span className={s.addMassageForm__textarea}>
                        <Field
                           component={Textarea}
                           errors={errors.massage}
                           touched={touched.massage}
                           type="massage"
                           name="massage"
                           placeholder="Enter your massage"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.massage}
                        />
                     </span>
                     <button
                        className={s.addMassageForm__btn}
                        type="submit"
                        disabled={isSubmitting}
                     >
                        Submit
                     </button>
                  </form>
               )}
            </Formik>

         </div>
      </div>
   )
}

export default Dialogs;