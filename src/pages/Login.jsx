import React, { useState } from 'react';
// import InputSection from '../components/InputSection';
import '../css/login.css';

export default function LoginForm() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
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
        <label className="lable" htmlFor="login">
          Login
          <input
            id="login"
            name="login"
            type="text"
            value={formData.login || ''}
            onChange={handleChange}
          />
        </label>
        <label className="lable" htmlFor="password">
          Password
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password || ''}
            onChange={handleChange}
          />
        </label>

        {/* <InputSection
          name="Login"
          id="login"
          type="text"
          value={formData.login || ''}
          onChange={handleChange}
        />
        <InputSection
          name="Password"
          id="password"
          type="password"
          value={formData.password || ''}
          onChange={handleChange}
        /> */}

        <input className="submit" type="submit" value="Submit" id="submit" />
      </fieldset>
    </form>
  );
}
