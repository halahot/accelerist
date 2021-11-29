import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { DashBoardScreen, LoginRegistrationScreen } from './pages';
import routes from './routes';
import { GlobalStyle } from './styles/global';

function App() {
  const pages = routes.map(route => (
    <Route key={route.path}
      path={route.path}
      element={<route.element />}
    ></Route>
  ))
  return (
    <>
      <GlobalStyle />
      <Routes>{pages}</Routes>
    </>
  );
}

export default App;
