import React from "react";
import styles from "./buttons.module.css";

const Button = ({ link, icon, title, className, ...props }) => {
  return (
    <a className={`${styles.button} ${className}`} href={link} {...props}>
      <img src={icon} alt={title} />
      <span>{title}</span>
    </a>





  );
};

export default Button;
