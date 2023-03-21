import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginForm from '../pages/Login';

export default function App() {
  return (
    <LoginForm />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
