import React from 'react';
import s from "./MyPosts.module.scss";
import Posts from './Post/Post';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Element from '../../common/formControls/formControls';

const Textarea = Element('textarea');

const MyPosts = React.memo((props) => {

   let postsElements = props.posts.map(p => (<Posts
      name={p.name}
      massage={p.massage}
      likes={p.likes}
      key={p.id}
      photos={props.photos}
   />))

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div className={s.addPostBlock}>
            <div>
               <AddNewPostForm {...props} />
            </div>
         </div>
         <div className={s.posts}>
            {postsElements}
         </div>
      </div >
   )
})

export const AddNewPostForm = (props) => {
   let onAddPost = (text) => {
      props.addPostActionCreator(text);
   }

   const submit = (values, { setSubmitting }) => {
      onAddPost(values.postText);
      values.postText = '';
      setSubmitting(false);
   }
   const validationSchema = yup.object().shape({
      postText: yup.string().required('Обязательно'),
   })
   return (
      <Formik
         initialValues={{ postText: '' }}
         validationSchema={validationSchema}
         onSubmit={submit}
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
            <form className={s.addNewPostForm} onSubmit={handleSubmit}>
               <Field
                  component={Textarea}
                  errors={errors.postText}
                  touched={touched.postText}
                  type={"text"}
                  name={"postText"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.postText}
               />
               <button
                  className={s.addNewPostForm__btn}
                  type="submit"
                  disabled={isSubmitting}
               >
                  Submit
               </button>
            </form>
         )}
      </Formik>
   )
}

export default MyPosts;





/* class MyPosts extends React.PureComponent {

   // shouldComponentUpdate(nextProps, nextState) {
    //  return nextProps != this.props || nextState != this.state;
  // }

   render() {
      console.log('RENDER');


      let postsElements = this.props.posts.map(p => (<Posts name={p.name} massage={p.massage} likes={p.likes} key={p.id} />))

      return (
         <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.addPostBlock}>
               <div>
                  <AddNewPostForm {...this.props} />
               </div>
            </div>
            <div className={s.posts}>
               {postsElements}
            </div>
         </div >
      )
   }
} */



/* const MyPosts = React.memo((props) => {

   console.log('RENDER');

   let postsElements = props.posts.map(p => (<Posts name={p.name} massage={p.massage} likes={p.likes} key={p.id} />))

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div className={s.addPostBlock}>
            <div>
               <AddNewPostForm {...props} />
            </div>
         </div>
         <div className={s.posts}>
            {postsElements}
         </div>
      </div >
   )
}) */