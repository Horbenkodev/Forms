import React, { useEffect, useState } from 'react';
import InputSection from '../components/InputSection';
import '../css/login.css';
import { Field, Form, Formik } from 'formik';

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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const serializedLogin = JSON.stringify(formData);

  //   console.log(JSON.parse(serializedLogin));
  //   sessionStorage.setItem(LOGIN_FORM_STORAGE_KEY, serializedLogin);
  // };

  const validate = (values) => {
    const errors = {};
    if (values.login === '') {
      errors.login = 'Required';
    }
    return errors;
  };

  return (
    <Formik
      initialValues={{
        login: '',
        password: '',
      }}
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
            <label htmlFor="login" className="labelLogin">Login</label>
            <Field
              title="Login"
              name="login"
              id="login"
              type="text"
              value={formData.login || ''}
              onChange={handleChange}
              // validate={validate}
            />
            {errors.login && touched.login && (<div>{errors.login}</div>)}

            <label htmlFor="password" className="labelLogin">Password</label>
            <Field
              title="Password"
              name="password"
              id="password"
              type="password"
              value={formData.password || ''}
              onChange={handleChange}
              // validate={validate}
            />
            {errors.password ? <div>{errors.password}</div> : null}

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
