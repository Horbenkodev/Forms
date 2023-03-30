import React, { useEffect, useState } from 'react';
import InputSection from '../components/InputSection';
import '../css/login.css';

const LOGIN_FORM_STORAGE_KEY = 'formData';

export default function LoginForm() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    const storageFormDataLogin = localStorage.getItem(LOGIN_FORM_STORAGE_KEY);

    if (storageFormDataLogin) {
      setFormData(JSON.parse(storageFormDataLogin));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const serializedLogin = JSON.stringify(formData);

    console.log(JSON.parse(serializedLogin));
    localStorage.setItem(LOGIN_FORM_STORAGE_KEY, serializedLogin);
  };

  return (
    <form onSubmit={handleSubmit} className="loginForm" id="loginForm">
      <fieldset className="loginForm-fieldset">
        <legend>Authorization</legend>
        <InputSection
          title="Login"
          name="login"
          id="login"
          type="text"
          value={formData.login || ''}
          onChange={handleChange}
          labelClass="lableLogin"
          inputClass=""
        />
        <InputSection
          title="Password"
          name="password"
          id="password"
          type="password"
          value={formData.password || ''}
          onChange={handleChange}
          labelClass="lableLogin"
          inputClass=""
        />

        <input className="submit" type="submit" value="Submit" id="submit" />
      </fieldset>
    </form>
  );
}
