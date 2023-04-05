import React, { Suspense, useEffect, useRef } from 'react';
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
        setTimeout(() => {
          if (item.isIntersecting) {
            ref.current.src = ref.current.dataset.src;
          }
        }, 2000);
      });
    });

    if (ref.current) {
      observer.current.observe(ref.current);
    }
  }, []);

  return (
    <div style={{ minHeight: '120px' }} className="user-block">
      <picture>
        <source srcSet={avatar} />
        <img loading="lazy" ref={ref} data-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAAAXNSR0IArs4c6QAABJxJREFUeF7t1mtQVGUcBvBnJbwgEVfZkVhHESTAD1QbNYnLwICXFNFJYxgH3dD1Eg6j4xhlTUWWgY6JZcwaa6FJCIQUA5oXBNFASiktUbnMgnIbEHTlYoR7mvPOxCQzJv/ZxYaZ//tpPzznfc/5ned99ygm6edK4DEsAQVjDctJhBhr+FaMRbBiLMaiCBCyfGYxFkGAEOVmMRZBgBDlZjEWQYAQ5WYxFkGAEOVmMRZBgBDlZjEWQYAQ5WYxFkGAEOVmMRZBgBDlZjEWQYAQ5WYxFkGAEOVmMRZBgBDlZjEWQYAQ5WYxFkGAEOVmPU6sV71D8XPbFTSYWgnLPjy61DsMZ5t/xUzX6TCaWnC9q9Eq81pjEoubVafNw84Lh5B26Ttr3A+qYw8j8dxeaDwCUdpUhe/rzlhlXmtMMiJY42zGoijqU/i7TEX//b+QeHYvMq8dh5/zVGTN3wa3CY7o6LuDBT9sEo38InQLIqcF425/L+xtJyC+ZCdWPPMKjhrL4WbniAhVEFRPukOeN6O6EG+fS0OM7xx88vJ6DJjvo6m7HUcbyvFx5dfWMHnoHCOCtWbmYiSqYxF34iNo/RbgBaU/ZmQsFYA2ijFYeTwJWfO2ofFuG5LOG1C2TI+kCgMm27thdcAi6E5tx1a1Fvn1pXAd74gY3wjoTm5HmEqNJV4h8DREQm70weoi1N1pwo7gDcirLcH64pTRh3Usajeu3W5EQskucfMtqwsxK1uH9r7biAuIRKCbD2Z7BKK604jylsuI8tLg2cxYkb25qgBvnN7xAJZa6YfgbB3c7ZxxafkhvJgVhzPL9PBMXyiuKX8tHVXt10cn1sWYA8itLR7cFq26IszOWYs9mk2Y4TwFJxor4eOoQt/An7jR3SZ+h+SuEw9ufD0fCaW7HsCSt/OcIwlwGu+Aq7GHsa44BamajaJh8pBfTr2peXRgpVZlQX85X9y4BAnJs+IRpPSHJmetOFs+fEkHlWERbqwqwAcV6ci4Uoialbm42mlE8i8HcWDu+wj6Vgv3iS7iwYduw6FYcrMqog1YXLAF1V0Nom0F9WUCK9onHD82nocCQJinGjk1p8RZOcnOCSU3L1q0Ta1yZsmH8j9DxgrOXoMjC5PhNM4BT4yxwZe/5+Odn/T4KuJdcVibJTPaejvhYe+G8LwNSAt9E95OnpAkCQOSGfFDtuFQLPd987BbsxHyZ4sCCpghIa/2tNj2couXH3tP/BkYwrdCuW8+9GFv4Xl3XzyXueL/xfqv1QNcpqG5pwOd90yDsSkOSpj6e9F1z4TJE13R2nsLZkmCj5MKrT23YOrveeQDjbWxxWchm7G5LFVgVUbvR8qFb7D/j4JHXmtJwOJmWbK4JdeeXPI5pjs+LZrb3d8LdZZWfHqM5Bi1WDKK11MesLe1w28dNSNpNDj3qMZ6LEL/WoSxCOKMxVgEAUKUm8VYBAFClJvFWAQBQpSbxVgEAUKUm8VYBAFClJvFWAQBQpSbxVgEAUKUm8VYBAFClJvFWAQBQpSbxVgEAUKUm8VYBAFClJvFWAQBQpSbxVgEAUKUm8VYBAFClJtFwPobPFAWfHZazmoAAAAASUVORK5CYII=" alt={name} />
      </picture>
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
