import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import { DashBoardScreen, LoginRegistrationScreen } from './pages';
import routes from './routes';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />

      {/* // <Routes>
      //   {routes.map(route => (
        //     <Route key={route.path} {...route} />
        //   ))}
        // </Routes> */}
      <DashBoardScreen />
    </>
  );
}

export default App;
