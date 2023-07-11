import React from "react";
import col from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Navigate } from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {ErrorMessageWrapper} from "./../../Utils/Validators/Validators";
import * as Yup from "yup";


const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.sidebar.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} img={d.img} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
 
 // if (!props.isAuth) {
 //   return <Navigate to={'/login'} />
 //}

  return (
    <div className={col.dialogs}>
      <div className={col.dialogsItems}>{dialogsElements}</div>
      <div className={col.messages}><div>{messagesElements}</div>
     <AddMessageForm sendMassage={props.sendMessage} />
    </div>
    </div>
  );
};


const AddMessageForm = (props) => {
  const validationSchema = Yup.object().shape({
    newMessageBody: Yup.string()
    .min(2, "Must be longer than 2 characters !" )
    .max( 10, "Must be shorter than 10 characters !" )
    .required( "Required !" )
  })
  const addNewMessage = (values) => {
    props.sendMessage(values)
  }
  return(
    <Formik 
    initialValues={{newMessageBody:""}}
    validationSchema={validationSchema}
    onSubmit={(values, {resetForm}) => {
      addNewMessage(values.newMessageBody);
      resetForm({values:""})
    }}
    >
      {() => (
        <Form>
          <div>
            <Field name={"newMessageBody"}
            as={"textarea"}
            placeholder={"enter new message"}
            />
                      </div>

            <ErrorMessage name="newMessageBody">
                  {ErrorMessageWrapper}
               </ErrorMessage>
<button type={"submit"}>Send</button>
        </Form>
      )}
    </Formik>
  )
}
export default Dialogs;
