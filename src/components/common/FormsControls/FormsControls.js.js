import React from "react";
import { Field, ErrorMessage } from "formik";

export const createField = (name, type, placeholder, id) => (
  <div>
    <Field name={name} type={type} placeholder={placeholder} id={id} />
  </div>
);
