import React from 'react';
import logo from './logo.svg';
import './App.css';

import { RecoilRoot } from 'recoil'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllPayments from './crud/allPayments'
import CreatePayment from './crud/createPayment'
import Test from './crud/test'

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/all" element={<AllPayments/>}/>
          <Route path="/create" element={<CreatePayment/>}/>
          <Route path="/test" element={<Test/>}/>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
