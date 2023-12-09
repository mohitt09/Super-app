import React from "react";
import styles from "./signUp.module.css";
import { signUpImage } from "../const";
import Form from "./Form";
import { Heading } from "../styled";

const SignUp = () => {
  return (
    <div className={styles.box}>
      <div className={styles.img}>
        <img height={100} src={signUpImage} alt="" />
      </div>
      <div className={styles.form}>
        <div className={styles.heading}>
          <Heading $color="#72DB73" $fontSize='50px' >Super app</Heading>
          <p>Create your new account</p>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default SignUp;
