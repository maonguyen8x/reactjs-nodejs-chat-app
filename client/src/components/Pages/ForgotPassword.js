import React, { useContext, useState, useEffect } from "react";
import Input from "../Common/FormElements/Input";
import Button from "../Common/Button/Button";
import { VALIDATOR_EMAIL } from "../util/validator";
import axios from "axios";
import { useForm } from "../hooks/formHook";
import { AuthContext } from "../context/authContext";

const ForgotPassword = (props) => {
  const auth = useContext(AuthContext);
  const [error, setError] = useState(null);

  const [formState, inputHandler] = useForm(
    //set inital input state + form validity state
    {
      email: {
        value: "",
        isValid: false,
      },
    },
    {
      isValid: false,
    }
  );

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const data = {
      email: formState.inputs.email.value,
    };
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("/api/users/login", data, config)
      .then((foundUser) => {
        if (foundUser.data.success === false) {
          setError(true);
        }
        if (foundUser.data.foundUser) {
          auth.login(foundUser.data.foundUser);
          props.history.push("/all");
        } else {
          props.history.push("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="padding-32 side-col white-bg mobile-full-height">
          <h1 className="margin-s text-center">Forgot password</h1>
          <p className="margin-s text-center">Enter your email and we will send you a link to reset password</p>
          <form onSubmit={onSubmitHandler}>
            <Input
              id="email"
              type="email"
              label="Email"
              errorText="Please enter a valid email."
              validator={[VALIDATOR_EMAIL()]}
              onInput={inputHandler}
              inputStyle="hide-text-input-field"
              inputContainerStyle="margin-s input-field"
              labelStyle="input-field-label"
              errorStyle="error-border"
            />
            <Button
              type="submit"
              btnStyle="Button margin-xs"
              disabledBtn={!formState.isValid}
            >
              Send reset link
            </Button>
          </form>
        </div>
        <div className="col blue-bg full-height padding-32 mobile-hide"></div>
      </div>
    </div>
  );
};
export default ForgotPassword;
