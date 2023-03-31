import React from 'react';
import PropTypes from 'prop-types';
import '../css/login.css';

export default function InputSection({
  id,
  name,
  type,
  value,
  onChange = () => {},
  inputClass,
  labelClass,
  title,
}) {
  return (
    <label className={labelClass} htmlFor={id}>
      {title}
      <input
        className={inputClass}
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

InputSection.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  inputClass: PropTypes.string,
  labelClass: PropTypes.string,
  title: PropTypes.string.isRequired,
};

InputSection.defaultProps = {
  inputClass: '',
  labelClass: '',
};
