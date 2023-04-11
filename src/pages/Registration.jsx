/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import '../css/registration.css';
import { Field, Form, Formik } from 'formik';

const REGISTRATION_FORM_STORAGE_KEY = 'formData';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({});

  const historyBack = () => {
    window.history.back();
  };

  useEffect(() => {
    const storageFormDataReg = sessionStorage.getItem(REGISTRATION_FORM_STORAGE_KEY);

    if (storageFormDataReg) {
      setFormData(JSON.parse(storageFormDataReg));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const stateValue = type === 'checkbox' ? e.target.checked : value;

    setFormData((values) => ({ ...values, [name]: stateValue }));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        surname: '',
        gender: '',
        date: '',
        country: '',
        city: '',
        color: '',
        maskot: '',
        height: 0,
        age: '',
        file: '',
        password: '',
        repeatpassword: '',
        email: '',
        subscribe: false,
      }}
      onSubmit={() => {
        const serializedReg = JSON.stringify(formData);

        console.log(JSON.parse(serializedReg));
        sessionStorage.setItem(REGISTRATION_FORM_STORAGE_KEY, serializedReg);
      }}
    >
      {({ errors, touched }) => (
        <Form className="regForm">
          <fieldset className="mainFieldset">
            <legend>Registration</legend>
            <div>
              <fieldset className="blockFieldset">
                <legend className="blockFieldset-legend">Common:</legend>

                <label htmlFor="name" className="regLabel">
                  Name
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name || ''}
                    onChange={handleChange}
                    required
                  />
                  <div>* John</div>
                  {errors.login && touched.login && (<div>{errors.login}</div>)}

                </label>

                <label className="regLabel" htmlFor="surname">
                  Surname
                  <Field
                    id="surname"
                    name="surname"
                    type="text"
                    value={formData.surname || ''}
                    onChange={handleChange}
                    required
                  />
                  <div>* Doe</div>
                </label>

                <div className="gender">
                  <div>Gender</div>
                  <div className="gender-radio">

                    <label className="gender-radio-label" htmlFor="male">
                      Male
                      <Field
                        id="male"
                        name="gender"
                        type="radio"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleChange}
                      />
                    </label>

                    <label className="gender-radio-label" htmlFor="female">
                      Female
                      <Field
                        id="female"
                        name="gender"
                        value="female"
                        type="radio"
                        checked={formData.gender === 'female'}
                        onChange={handleChange}
                      />
                    </label>

                    <label className="gender-radio-label" htmlFor="unknown">
                      Unknown
                      <Field
                        id="unknown"
                        name="gender"
                        value="unknown"
                        type="radio"
                        checked={formData.gender === 'unknown'}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <label className="regLabel" htmlFor="date">
                    Date of birth
                    <Field
                      id="date"
                      type="date"
                      name="date"
                      value={formData.date || ''}
                      onChange={handleChange}
                      required
                    />
                    <div>* 01/01/1900</div>
                  </label>
                </div>
              </fieldset>
            </div>

            <div>
              <fieldset className="blockFieldset">
                <legend className="blockFieldset-legend">Address:</legend>

                <div>
                  <label className="regLabel" htmlFor="country">
                    Country
                    <Field
                      component="select"
                      id="country"
                      name="country"
                      value={formData.country || ''}
                      onChange={handleChange}
                    >
                      <option value="select">Select</option>
                      <option value="ukraine">Ukraine</option>
                      <option value="poland">Poland</option>
                      <option value="usa">USA</option>
                      <option value="germany">Germany</option>
                    </Field>
                  </label>
                </div>

                <div>
                  <label className="regLabel" htmlFor="city">
                    City
                    <Field
                      value={formData.city || ''}
                      list="city"
                      id="city"
                      name="city"
                      onChange={handleChange}
                    />
                    <datalist id="cities">
                      <option value="Kherson">Kherson</option>
                      <option value="Dnipro">Dnipro</option>
                      <option value="Kyiv">Kyiv</option>
                      <option value="Lviv">Lviv</option>
                      <option value="Odessa">Odessa</option>
                    </datalist>
                  </label>
                </div>
              </fieldset>
            </div>

            <div>
              <fieldset className="blockFieldset">
                <legend className="blockFieldset-legend">Other:</legend>

                <label className="regLabel" htmlFor="color">
                  Favorite color
                  <Field
                    className="inputColor"
                    id="color"
                    type="color"
                    name="color"
                    value={formData.color || '#000000'}
                    onChange={handleChange}
                  />
                </label>

                <div>
                  <label className="regLabel" htmlFor="maskot">
                    Favorite maskot
                    <Field
                      component="select"
                      value={formData.maskot || ''}
                      name="maskot"
                      id="maskot"
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Benny the Bull">Benny the Bull</option>
                      <option value="Harry the Hawk">Harry the Hawk</option>
                      <option value="Boomer">Boomer</option>
                      <option value="Bango (the Buck)">Bango (the Buck)</option>
                      <option value="Crunch the  Wolf">Crunch the  Wolf</option>
                    </Field>
                  </label>
                </div>

                <label className="regLabel" htmlFor="height">
                  Choose your height
                  <Field
                    id="height"
                    type="range"
                    value={formData.height || 0}
                    min={0}
                    max={200}
                    name="height"
                    onChange={handleChange}
                  />
                  <div>
                    Height:
                    { formData.height || 0}
                  </div>
                </label>

                <label className="regLabel" htmlFor="age">
                  Choose your age
                  <Field
                    value={formData.age || ''}
                    id="age"
                    type="number"
                    name="age"
                    min={0}
                    max={200}
                    onChange={handleChange}
                  />
                </label>

                <label className="regLabel" htmlFor="addCV">
                  Add CV
                  <Field
                    id="addCV"
                    type="file"
                    name="file"
                    onChange={handleChange}
                  />
                </label>
              </fieldset>
            </div>

            <div>
              <fieldset className="blockFieldset">
                <legend className="blockFieldset-legend">Security:</legend>

                <label className="regLabel" htmlFor="password">
                  Password
                  <Field
                    id="password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={formData.password || ''}
                  />
                </label>

                <label className="regLabel" htmlFor="repeatPassword">
                  Repeat Password
                  <Field
                    id="repeatPassword"
                    type="password"
                    name="repeatpassword"
                    onChange={handleChange}
                    value={formData.repeatpassword || ''}
                  />
                </label>

                <label className="regLabel" htmlFor="email">
                  Email
                  <Field
                    id="email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email || ''}
                  />
                </label>
              </fieldset>
            </div>

            <div>
              <fieldset className="blockFieldset">
                <legend className="blockFieldset-legend">Email subscription:</legend>

                <label className="checkboxLabel" htmlFor="subscribe">
                  Subscribe to news
                  <Field
                    className="checkboxLabel-input"
                    id="subscribe"
                    type="checkbox"
                    name="subscribe"
                    checked={formData.subscribe || false}
                    onChange={handleChange}
                  />
                </label>
              </fieldset>
            </div>
            <div style={{ margin: '0 auto' }}>
              <button type="button" className="backBtn" onClick={historyBack}>Back</button>
              <input className="submit" type="submit" value="Register" />
            </div>
          </fieldset>
        </Form>
      )}
    </Formik>

  );
}
