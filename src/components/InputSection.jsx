import React from 'react';
import PropTypes from 'prop-types';
import '../css/login.css';

export default function InputSection({
  id,
  name,
  type,
  value,
  onChange,
}) {
  return (
    <label className="lableLogin" htmlFor={id}>
      {name}
      <input name={name} id={id} type={type} value={value} onChange={onChange} />
    </label>
  );
}

InputSection.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

InputSection.defaultProps = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
