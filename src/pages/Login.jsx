import React, { useState } from 'react';
import InputSection from '../components/InputSection';
import '../css/login.css';

export default function LoginForm() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="loginForm" id="loginForm">
      <fieldset className="loginForm-fieldset">
        <legend>Authorization</legend>
        <InputSection
          name="login"
          id="login"
          type="text"
          value={formData.login || ''}
          onChange={handleChange}
          labelClass="lableLogin"
        />
        <InputSection
          name="password"
          id="password"
          type="password"
          value={formData.password || ''}
          onChange={handleChange}
          labelClass="lableLogin"
        />

        <input className="submit" type="submit" value="Submit" id="submit" />
      </fieldset>
    </form>
  );
}
