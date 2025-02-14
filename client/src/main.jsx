import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './finance/home';
import Detail from './finance/detail';
import Footer from './finance/footer';
import Upload from './finance/upload';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './finance/login';
import FinanceInfo from './finance/financeinfo';
import MyNavbar from './finance/navbar';
import EditInfo from './finance/editinfo';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<><MyNavbar /><Home /><Footer /></>} />
          <Route path="/:id" element={<><MyNavbar /><FinanceInfo /><Footer /></>} />
          <Route path="/detail" element={<><MyNavbar /><Detail /><Footer /></>} />
          <Route path="/upload" element={<><MyNavbar /><Upload /><Footer /></>} />
          <Route path="/editinfo/:id" element={<><MyNavbar /><EditInfo/><Footer /></>} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
