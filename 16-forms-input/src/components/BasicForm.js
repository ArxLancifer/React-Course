import React, { useState } from "react";
import useForm from "../hooks/use-form";
const BasicForm = (props) => {
  function nameValidator(nameValue) {
    return nameValue !== "";
  }

  function emailValidator(emailValue) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailValue.match(emailRegex)) {
      return true;
    } else return false;
  }

  const {
    inputValue: inputName,
    hasError: nameHasError,
    inputValueChangeHandler: inputNameChangeHandler,
    inputBlurHandler: inputNameBlurHandler,
    resetField: resetNameField,
  } = useForm(nameValidator);

  const {
    inputValue: inputLastName,
    hasError: lastNameHasError,
    inputValueChangeHandler: inputLastNameChangeHandler,
    inputBlurHandler: inputLastNameBlurHandler,
    resetField: resetLastNameField,
  } = useForm(nameValidator);

  const {
    inputValue: inputEmail,
    hasError: emailHasError,
    inputValueChangeHandler: inputEmailChangeHandler,
    inputBlurHandler: inputEmailBlurHandler,
    resetField: resetEmailField,
  } = useForm(emailValidator);

  const validInputs = nameHasError && emailHasError && lastNameHasError;

  const nameError = nameHasError ? "form-control invalid" : "form-control";

  const lastNameError = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailError = emailHasError ? "form-control invalid" : "form-control";

  function formSubmitHandler(event) {
    event.preventDefault();

    if (validInputs) {
      return;
    }

    resetNameField();
    resetLastNameField();
    resetEmailField();
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameError}>
          <label htmlFor="name">First Name</label>
          <input
            onChange={inputNameChangeHandler}
            onBlur={inputNameBlurHandler}
            type="text"
            id="name"
            value={inputName}
          />
          {nameHasError && <p>Name field can not be empty</p>} {/* Error */}
        </div>
        <div className={lastNameError}>
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={inputLastNameChangeHandler}
            onBlur={inputLastNameBlurHandler}
            type="text"
            id="lastName"
            value={inputLastName}
          />
          {lastNameHasError && <p>Last name field can not be empty</p>}{" "}
          {/* Error */}
        </div>
      </div>
      <div className={emailError}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          onChange={inputEmailChangeHandler}
          onBlur={inputEmailBlurHandler}
          type="text"
          id="email"
          value={inputEmail}
        />
        {emailHasError && <p>Email has to be type of example@something.com</p>}{" "}
        {/* Error */}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
