import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import placeholderSrc from '../img/Spinner.gif';

export default function UserItem({
  name,
  avatar,
  gender,
}) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const ref = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((item) => {
        setTimeout(() => {
          if (item.isIntersecting) {
            setIsImageLoaded(true);
            ref.current.src = avatar;
          }
        }, 2000);
      });
    });

    if (ref.current) {
      observer.current.observe(ref.current);
    }
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);
  return (
    <div style={{ minHeight: '120px' }} className="user-block">
      <img loading="lazy" ref={ref} src={isImageLoaded ? avatar : placeholderSrc} alt={name} />
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
