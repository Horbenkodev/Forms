import React from 'react';
import PropTypes from 'prop-types';

export default function UserItem({
  name,
  avatar,
  gender,
}) {
  return (
    <div className="user-block">
      <img loading="lazy" src={avatar} alt={name} />
      <div className="user-block_name">{name}</div>
      <div className="user-block_gender">{gender}</div>
    </div>
  );
}

UserItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  gender: PropTypes.string,
};

UserItem.defaultProps = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  gender: PropTypes.string,
};
