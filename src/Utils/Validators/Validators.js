import React from "react";
import col from "./Validators.module.css"

export const ErrorMessageWrapper = (message) => {
    return (
    <div className={col.errorMassage}>
       {message}
    </div>
    )
}
 export const validateEmailField = values => {
    const errors = {};
    if (!values.email){
        errors.email = "Required 1";
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ){errors.email = "Invalid email address";}
    return errors;
 }