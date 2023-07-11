import React from "react";
import col from "./Message.module.css";

const Message = (props) => {
  return <div className={col.message}>{props.message}
  </div>;
};

export default Message;
