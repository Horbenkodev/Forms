/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

export default function Filters({
  onChage,
}) {
  return (
    <div className="users-filter">
      <input onChange={onChage} type="text" placeholder="Enter name" />
      <div className="users-filter-gender">
        <div>
          <input id="male" type="checkbox" />
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input id="female" type="checkbox" />
          <label htmlFor="female">Female</label>
        </div>
      </div>
    </div>
  );
}

Filters.propTypes = {
  onChage: PropTypes.func.isRequired,
};
