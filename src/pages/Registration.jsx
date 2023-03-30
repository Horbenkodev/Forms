import React, { useState, useEffect } from 'react';
import InputSection from '../components/InputSection';
import '../css/registration.css';

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

    return false;
  }, []);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const stateValue = type === 'checkbox' ? e.target.checked : value;

    setFormData((values) => ({ ...values, [name]: stateValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serializedReg = JSON.stringify(formData);

    console.log(JSON.parse(serializedReg));
    sessionStorage.setItem(REGISTRATION_FORM_STORAGE_KEY, serializedReg);
  };

  return (
    <form className="regForm" onSubmit={handleSubmit}>
      <fieldset className="mainFieldset">
        <legend>Registration</legend>
        <div>
          <fieldset className="blockFieldset">
            <legend className="blockFieldset-legend">Common:</legend>

            <label className="regLabel" htmlFor="name">
              Name
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name || ''}
                onChange={handleChange}
                required
              />
              <div>* John</div>
            </label>

            <label className="regLabel" htmlFor="surname">
              Surname
              <input
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
                  <input
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
                  <input
                    id="female"
                    name="gender"
                    value="female"
                    type="radio"
                    checked={formData.gender === 'female'}
                    onChange={handleChange}
                  />
                </label>

                <label className="gender-radio-label" htmlFor="unknow">
                  Unknow
                  <input
                    id="unknow"
                    name="gender"
                    value="unknow"
                    type="radio"
                    checked={formData.gender === 'unknow'}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>

            <div>
              <label className="regLabel" htmlFor="date">
                Date of birth
                <input
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
                <select
                  value={formData.country || ''}
                  name="country"
                  id="country"
                  onChange={handleChange}
                >
                  <option value="select">Select</option>
                  <option value="ukraine">Ukraine</option>
                  <option value="poland">Poland</option>
                  <option value="usa">USA</option>
                  <option value="germany">Germany</option>
                </select>
              </label>
            </div>

            <div>
              <label className="regLabel" htmlFor="city-add">
                City
                <input
                  value={formData.city || ''}
                  list="city"
                  id="city-add"
                  name="city"
                  onChange={handleChange}
                />
                <datalist id="city">
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

            <InputSection
              title="Favorite color"
              labelClass="regLabel"
              inputClass="inputColor"
              id="color"
              type="color"
              name="color"
              value={formData.color || ''}
              onChange={handleChange}
            />

            <div>
              <label className="regLabel" htmlFor="maskot">
                Favorite maskot
                <select
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
                </select>
              </label>
            </div>

            <label className="regLabel" htmlFor="height">
              Choose your height
              <input
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
              <input
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
              <input
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

            <InputSection
              title="Password"
              inputClass=""
              labelClass="regLabel"
              id="password"
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password || ''}
            />

            <InputSection
              title="Repeat password"
              inputClass=""
              labelClass="regLabel"
              id="repeatPassword"
              type="password"
              name="repeatpassword"
              onChange={handleChange}
              value={formData.repeatpassword || ''}
            />

            <InputSection
              title="Email"
              inputClass=""
              labelClass="regLabel"
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email || ''}
            />

          </fieldset>
        </div>
        <div>
          <fieldset className="blockFieldset">
            <legend className="blockFieldset-legend">Email subscription:</legend>

            <label className="checkboxLabel" htmlFor="subscribe">
              Subscribe to news
              <input
                className="checkboxLabel-input"
                id="subscribe"
                type="checkbox"
                name="subscribe"
                checked={formData.subscribe}
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
    </form>
  );
}
