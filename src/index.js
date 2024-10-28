import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// eslint-disable-next-line no-unused-vars
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Intro, January, February } from "./pages.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Intro />} />
          <Route path="january" element={<January />} />   
          <Route path="february" element={<February />} />      
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
