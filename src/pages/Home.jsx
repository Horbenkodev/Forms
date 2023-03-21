import React from 'react';

export default function Home() {
  return (
    <div style={{ margin: '0 auto', width: '10%' }}>
      <a style={{fontSize: '30px', margin: '10px'}} href='/login'>Login</a>
      <a style={{fontSize: '30px', margin: '10px'}} href='/registration'>Registration</a>
    </div>
  );
}
