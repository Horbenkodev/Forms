/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import InputSection from '../components/InputSection';
import '../css/registration.css';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({});
  const [rangeValue, setRangeValue] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleCheckboxChange = (e) => {
    handleCheckbox(e);
    handleChange(e);
  };

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };

  const handleInputRange = (e) => {
    handleRangeChange(e);
    handleChange(e);
  };

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
    <form className="regForm" onSubmit={handleSubmit}>
      <fieldset className="mainFieldset">
        <legend>Registration</legend>
        <div>
          <fieldset className="blockFieldset">
            <legend className="blockFieldset-legend">Common:</legend>

            {/* <label className="label" htmlFor="name">
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
            </label> */}
            <InputSection />

            <label className="label" htmlFor="surname">
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
              <label htmlFor="#">Gender</label>
              <div className="gender-radio">

                <label className="gender-radio-label" htmlFor="male">
                  Male
                  <input
                    id="male"
                    name="gender"
                    type="radio"
                    value="male"
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
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>

            <div>
              <label className="label" htmlFor="date">
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
              <label className="label" htmlFor="country">
                Country
                <select
                  name="country"
                  id="country"
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="ukraine">Ukraine</option>
                  <option value="poland">Poland</option>
                  <option value="usa">USA</option>
                  <option value="germany">Germany</option>
                </select>
              </label>
            </div>

            <div>
              <label className="label" htmlFor="city-add">
                City
                <input
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

            <label className="label" htmlFor="color">
              Favorite Color
              <input
                className="inputColor"
                id="color"
                type="color"
                name="color"
                onChange={handleChange}
              />
            </label>

            <div>
              <label className="label" htmlFor="maskot">
                Favorite maskot
                <select name="maskot" id="maskot" onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Benny the Bull">Benny the Bull</option>
                  <option value="Harry the Hawk">Harry the Hawk</option>
                  <option value="Boomer">Boomer</option>
                  <option value="Bango (the Buck)">Bango (the Buck)</option>
                  <option value="Crunch the  Wolf">Crunch the  Wolf</option>
                </select>
              </label>
            </div>

            <label className="label" htmlFor="height">
              Choose your height
              <input
                id="height"
                type="range"
                value={rangeValue}
                min={0}
                max={200}
                name="height"
                onChange={handleInputRange}
              />
              <div name="height" value={rangeValue}>
                Height:
                { rangeValue }
              </div>
            </label>

            <label className="label" htmlFor="age">
              Choose your age
              <input
                id="age"
                type="number"
                name="age"
                onChange={handleChange}
              />
            </label>

            <label className="label" htmlFor="addCV">
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

            <label className="label" htmlFor="password">
              Password
              <input
                id="password"
                type="password"
                name="password"
                onChange={handleChange}
              />
            </label>

            <label className="label" htmlFor="repeatPassword">
              Repeat Password
              <input
                id="repeatPassword"
                type="password"
                name="repeat password"
                onChange={handleChange}
              />
            </label>

            <div>
              <label className="label" htmlFor="email">
                Email
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
              </label>
            </div>
          </fieldset>
        </div>
        <div>
          <fieldset className="blockFieldset">
            <legend className="blockFieldset-legend">Email subscription:</legend>

            <div>
              <label className="checkboxLabel" htmlFor="subscribe">
                Subscribe to news
                <input
                  className="checkboxLabel-input"
                  id="subscribe"
                  type="checkbox"
                  value={!isChecked}
                  name="subscribe"
                  onChange={handleCheckboxChange}
                />
              </label>
            </div>
          </fieldset>
        </div>

        <input className="submit" type="submit" value="Register" />

      </fieldset>
    </form>
  );
}
