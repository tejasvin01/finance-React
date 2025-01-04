import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './finance/home';
import Detail from './finance/detail';
import Footer from './finance/footer';
import Upload from './finance/upload';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Login from './finance/login';
import FinanceInfo from './finance/financeinfo';
import MyNavbar from './finance/navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<><MyNavbar /><Home /><Footer /></>} />
          <Route path="/:id" element={<><MyNavbar /><FinanceInfo /></>} />
          <Route path="/detail" element={<><MyNavbar /><Detail /></>} />
          <Route path="/upload" element={<><MyNavbar /><Upload /></>} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);



