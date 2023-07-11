import React from "react";
import col from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {ErrorMessageWrapper} from "../../../Utils/Validators/Validators";

const AddNewPostForm = (props) => {
   const onAddPost = (values) => {
      props.addPost( values );
   }
   return (
      <Formik
         initialValues={{
            newPostText: ""
         }}
         onSubmit={(values, {resetForm}) => {
            onAddPost( values.newPostText );
            resetForm( {values: ''} );
         }}
      >
         {() => (
            <Form>
               <div>
                  <Field
                     name={'newPostText'}
                     as={'textarea'}
                     placeholder={'enter text '}
                  />
               </div>
 
               <ErrorMessage name="newPostText">
                  {ErrorMessageWrapper}
               </ErrorMessage>
 
               <button type={'submit'}>Add posts</button>
            </Form>
         )}
      </Formik>
   )
 }
 

class MyPosts extends React.Component {
   render () {

      let postsElements =[...this.props.posts].reverse().map((p) => (
        <Post message={p.message} likesCount={p.likesCount} />
      ));
    
    //  let newPostElement = React.createRef();
    
     // let onAddPost = () => {
     //   props.addPost();
     // };
    
      //let onPostChange = () => {
      //  let text = newPostElement.current.value;
     //   props.updateNewPostText(text);
     // };
    
      return (
        <div className={col.postsBlock}>
          <h3 className={col.h3}>My posts</h3>
          <AddNewPostForm
                addPost={this.props.addPost}
             />
          
          <div className={col.posts}>{postsElements}</div>
        </div>
      );
    };
   }



export default MyPosts;
