import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import col from "./../../App.css";
import {
  ErrorMessageWrapper,
  validateEmailField,
} from "./../../Utils/Validators/Validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import { createError, createField } from "../common/FormsControls/FormsControls.js";

const LoginPage = ({ isAuth, login }) => {
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, "Must be longer than 2 characters")
      .max(100, "Must be shorter than 100 characters")
      .required("Required 2"),
  });
  if (isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div>
      <h3>LOGIN PAGE</h3>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
          general: "",
        }}
        validate={validateEmailField}
        validationSchema={validationSchema}
        onSubmit={(values, bagWithMethods) => {
          let { setStatus, setFieldValue, setSubmitting } = bagWithMethods;
          login(
            values.email,
            values.password,
            values.rememberMe,
            setStatus,
            setFieldValue,
            setSubmitting
          );
        }}
      >
        {(props) => {
          let { status, values, isSubmitting } = props;

          //console.log( status );
          //console.log( values.general );
          console.log(props.isSubmitting);

          return (
            <Form>
              <div>
                {values.general && (
                  <div>_.{values.general} - with setFieldValue</div>
                )}

                {status && (
                  <div className={col.validationErrorMessage}>
                    ..{status} - with setStatus
                  </div>
                )}
                {createField("email", "text", "e-mail", null)}
                {createField("password", "password", "password", null)}
                {createField("rememberMe", "checkbox", null, "rememberMe")}
                <label htmlFor={"rememberMe"}> remember me </label>
                <button type={"submit"} disabled={isSubmitting}>
                  {isSubmitting ? "Please wait..." : "LOGIN"}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth });
const LoginPageConnect = connect(mapStateToProps, { login })(LoginPage);

export default LoginPageConnect;
