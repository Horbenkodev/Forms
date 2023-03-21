import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginForm from '../pages/Login';
import RegistrationForm from '../pages/Registration';

export default function App() {
  return (
    <LoginForm />,
      <RegistrationForm />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
