import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import { UserContextProvider } from './context/UserContext';
import { BrowserRouter, Routes,Route } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider> 
    <BrowserRouter>
          <Routes>
          <Route  path=  "/" element={<App/>} /> 
          <Route path=  "/*" element={<ErrorPage/>} /> 
          </Routes>
      </BrowserRouter>
    </UserContextProvider>
    
  </React.StrictMode>
);



