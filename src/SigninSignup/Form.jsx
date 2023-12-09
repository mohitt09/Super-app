import React, { useEffect, useState } from "react";
import styles from "./form.module.css";
import { ColorButton, HoverSpan, Span } from "../styled";
import { validate } from "../helper";
import { useDispatch, useSelector } from "react-redux";
import { setUserRedux } from "../store/appSlice";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const store = useSelector((store) => store.app);

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    share: false,
  });

  const [error, setError] = useState({
    name: true,
    username: true,
    email: true,
    mobile: true,
    share: true,
  });

  const updateUser = (fieldName, fieldValue) => {
    setUser((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  function isNotEmpty(value) {
    return value !== null && value !== undefined && value !== "";
  }

  useEffect(() => {
    const errorCheck = Object.values(error).every((item) => item === true);
    const userCheck = Object.values(user).every(isNotEmpty);

    if( store.user ){
      navigate('/genre')
    }


    if (errorCheck && userCheck) {
      dispatch(setUserRedux(user));
      navigate('/genre')
    }
  }, [error]);

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        setError({
          name: user.name ? true : false,
          username: user.username ? true : false,
          email: validate(
            /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
            user.email
          ),
          mobile: validate(/^(\+\d{1,3}[- ]?)?\d{10}$/, user.mobile),
          share: user.share,
        });
      }}
    >
      <div className={styles.inputs}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={(e) => updateUser(e.target.name, e.target.value.trim())}
        />
        {!error.name && <Span $color="red">Field is required</Span>}
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={(e) => updateUser(e.target.name, e.target.value.trim())}
        />
        {!error.username && <Span $color="red">Field is required</Span>}
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => updateUser(e.target.name, e.target.value)}
        />
        {!error.email && (
          <Span $color="red">
            {user.email ? "Email is not correct" : "Field is required"}
          </Span>
        )}
        <input
          type="number"
          placeholder="Mobile"
          name="mobile"
          onChange={(e) => updateUser(e.target.name, e.target.value)}
        />
        {!error.mobile && (
          <Span $color="red">
            {user.mobile ? "Mobile number is not correct" : "Field is required"}
          </Span>
        )}
      </div>
      <label className={styles.container}>
        <input
          type="checkbox"
          name="share"
          onChange={(e) => updateUser(e.target.name, e.target.checked)}
        />
        <div className={styles.checkmark}></div>
        <Span $color="#7C7C7C">Share my registration data with Superapp</Span>

        {!error.share && (
          <Span $color="red">Check this box if you want to proceed</Span>
        )}
      </label>

      <ColorButton type="submit" $bgColor="#72DB73">
        SIGN UP
      </ColorButton>
      <div className={styles.terms}>
        <p>
          <Span $color="#7C7C7C">
            By clicking on Sign up. you agree to Superapp{" "}
          </Span>
          <HoverSpan $color="#72DB73">Terms and Conditions of Use</HoverSpan>
        </p>
        <p>
          <Span $color="#7C7C7C">
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp{" "}
          </Span>
          <HoverSpan $color="#72DB73">Privacy Policy</HoverSpan>
        </p>
      </div>
    </form>
  );
};

export default Form;
