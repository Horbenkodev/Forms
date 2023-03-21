/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

export default function RegistrationForm() {


  return (
    <form style={{ width: '50%', margin: '0 auto' }}>
      <fieldset>
        <legend>Registration</legend>
        <div>
          <fieldset>
            <legend>Common:</legend>

            <label htmlFor="name" style={{ display: 'flex', justifyContent: 'space-between' }}>
              Name
              <input id="name" type="text" required />
              <div>* John</div>
            </label>

            <label htmlFor="surname" style={{ display: 'flex', justifyContent: 'space-between' }}>
              Surname
              <input id="surname" type="text" required />
              <div>* Doe</div>
            </label>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <label htmlFor="#">Gender</label>
              <div style={{ display: 'flex', flexDirection: 'column' }}>

                <label htmlFor="male">
                  Male
                  <input id="male" name="gender" type="radio" />
                </label>

                <label htmlFor="female">
                  Female
                  <input id="female" name="gender" type="radio" />
                </label>

                <label htmlFor="unknow">
                  Unknow
                  <input id="unknow" name="gender" type="radio" />
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="date" style={{ display: 'flex', justifyContent: 'space-between' }}>
                Date of birth
                <input id="date" type="date" required />
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
                <select name="country" id="country">
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
                <input list="city" id="city-add" />
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
              <input id="color" type="color" />
            </label>

            <div>
              <label htmlFor="maskot">
                Favorite maskot
                <select name="maskot" id="maskot">
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
              <input id="height" type="range" min={0} max={200} />
              <div>
                Height:
                <output id="heightValue" />
              </div>
            </label>

            <label htmlFor="age">
              Choose your age
              <input id="age" type="number" />
            </label>

            <label htmlFor="addCV">
              Add CV
              <input id="addCV" type="file" />
            </label>
          </fieldset>
        </div>

        <div>
          <fieldset>
            <legend>Security:</legend>

            <label htmlFor="password">
              Password
              <input id="password" type="password" />
            </label>

            <label htmlFor="repeatPassword">
              Repeat Password
              <input id="repeatPassword" type="password" />
            </label>

            <div>
              <label htmlFor="email">
                Email
                <input id="email" type="email" />
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
                <input id="subscribe" type="checkbox" />
              </label>
            </div>
          </fieldset>
        </div>

        <input type="submit" value="Register" />

      </fieldset>
    </form>
  );
}
