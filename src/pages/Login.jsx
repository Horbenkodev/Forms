/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import '../css/login.css';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';

const LOGIN_FORM_STORAGE_KEY = 'formData';

export default function LoginForm() {
  const [formData, setFormData] = useState({});

  const historyBack = () => {
    window.history.back();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    const storageFormDataLogin = sessionStorage.getItem(LOGIN_FORM_STORAGE_KEY);

    if (storageFormDataLogin) {
      setFormData(JSON.parse(storageFormDataLogin));
    }
  }, []);

  const validate = () => {
    const errors = {};

    if (!formData.login) {
      errors.login = 'Required';
    }
    if (!formData.password) {
      errors.password = 'Required';
    } else if (formData.password.length < 6) {
      errors.password = 'Minimum 6 characters';
    }
    return errors;
  };

  return (
    <Formik
      initialValues={{
        login: formData.login,
        password: formData.login,
      }}
      validate={validate}
      onSubmit={() => {
        const serializedLogin = JSON.stringify(formData);

        console.log(JSON.parse(serializedLogin));
        sessionStorage.setItem(LOGIN_FORM_STORAGE_KEY, serializedLogin);
      }}
    >
      {({ errors, touched }) => (

        <Form className="loginForm" id="loginForm">
          <fieldset className="loginForm-fieldset">
            <legend>Authorization</legend>
            <label htmlFor="login" className="labelLogin">
              Login
              <Field
                style={{ border: `1px solid  ${errors.login && touched.login ? 'red' : ''}` }}
                title="Login"
                name="login"
                id="login"
                type="text"
                value={formData.login || ''}
                onChange={handleChange}
              />
            </label>
            <ErrorMessage className="errorMessage" component="div" name="login" />

            <label htmlFor="password" className="labelLogin">
              Password
              <Field
                style={{ border: `1px solid  ${errors.password && touched.password ? 'red' : ''}` }}
                title="Password"
                name="password"
                id="password"
                type="password"
                value={formData.password || ''}
                onChange={handleChange}
              />
            </label>
            <ErrorMessage className="errorMessage" component="div" name="password" />

            <div className="btnBlock">
              <button type="button" className="backBtn" onClick={historyBack}>Back</button>
              <button type="submit">Submit</button>
            </div>
          </fieldset>
        </Form>
      )}
    </Formik>
  );
}
