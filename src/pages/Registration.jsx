/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit} style={{ width: '50%', margin: '0 auto' }}>
      <fieldset>
        <legend>Registration</legend>
        <div>
          <fieldset>
            <legend>Common:</legend>

            <label htmlFor="name" style={{ display: 'flex', justifyContent: 'space-between' }}>
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

            <label htmlFor="surname" style={{ display: 'flex', justifyContent: 'space-between' }}>
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

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <label htmlFor="#">Gender</label>
              <div style={{ display: 'flex', flexDirection: 'column' }}>

                <label htmlFor="male">
                  Male
                  <input
                    id="male"
                    name="gender"
                    type="radio"
                    value="male"
                    onChange={handleChange}
                  />
                </label>

                <label htmlFor="female">
                  Female
                  <input
                    id="female"
                    name="gender"
                    value="female"
                    type="radio"
                    onChange={handleChange}
                  />
                </label>

                <label htmlFor="unknow">
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
              <label htmlFor="date" style={{ display: 'flex', justifyContent: 'space-between' }}>
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
          <fieldset>
            <legend>Address:</legend>

            <div>
              <label htmlFor="country">
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
              <label htmlFor="city-add">
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
          <fieldset>
            <legend>Other:</legend>

            <label htmlFor="color">
              Favorite Color
              <input
                id="color"
                type="color"
                name="color"
                onChange={handleChange}
              />
            </label>

            <div>
              <label htmlFor="maskot">
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

            <label htmlFor="height">
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

            <label htmlFor="age">
              Choose your age
              <input
                id="age"
                type="number"
                name="age"
                onChange={handleChange}
              />
            </label>

            <label htmlFor="addCV">
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
          <fieldset>
            <legend>Security:</legend>

            <label htmlFor="password">
              Password
              <input
                id="password"
                type="password"
                name="password"
                onChange={handleChange}
              />
            </label>

            <label htmlFor="repeatPassword">
              Repeat Password
              <input
                id="repeatPassword"
                type="password"
                name="repeat password"
                onChange={handleChange}
              />
            </label>

            <div>
              <label htmlFor="email">
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
          <fieldset>
            <legend>Email subscription:</legend>

            <div>
              <label htmlFor="subscribe">
                Subscribe to news
                <input
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

        <input type="submit" value="Register" />

      </fieldset>
    </form>
  );
}
