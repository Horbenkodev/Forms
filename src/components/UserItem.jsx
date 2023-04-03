import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function UserItem({
  name,
  avatar,
  gender,
}) {
  const ref = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((item) => {
        if (item.isIntersecting) {
          ref.current.src = ref.current.dataset.src;
        }
      });
    });

    if (ref.current) {
      observer.current.observe(ref.current);
    }
  }, []);

  return (
    <div style={{ minHeight: '120px' }} className="user-block">
      <img loading="lazy" ref={ref} data-src={avatar} alt={name} />
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
