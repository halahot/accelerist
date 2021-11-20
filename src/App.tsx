import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import routes from './routes';

function App() {
  return (
    <Routes>
      {routes.map(route => (
        <Route key={route.path} {...route} />
      ))}
    </Routes>
  );
}

export default App;
