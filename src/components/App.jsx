import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import LoginForm from '../pages/Login';
import RegistrationForm from '../pages/Registration';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
