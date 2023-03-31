/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

export default function Filters({
  onChangeTxt,
  onChangeCheck,
}) {
  return (
    <div className="users-filter">
      <input onChange={onChangeTxt} type="text" placeholder="Enter name" />
      <div className="users-filter-gender">
        <div>
          <input id="male" type="checkbox" onChange={onChangeCheck} name="Male" />
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input id="female" type="checkbox" onChange={onChangeCheck} name="Female" />
          <label htmlFor="female">Female</label>
        </div>
      </div>
    </div>
  );
}

Filters.propTypes = {
  onChangeTxt: PropTypes.func.isRequired,
  onChangeCheck: PropTypes.func.isRequired,
};
