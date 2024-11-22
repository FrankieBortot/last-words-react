import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// eslint-disable-next-line no-unused-vars
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as script from "./pages.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<script.Intro />} />
          <Route path="january" element={<script.January />} />   
          <Route path="february" element={<script.February />} />   
          <Route path="march" element={<script.March />}/>   
          <Route path="april" element={<script.April />} />
          <Route path="may" element={<script.May />} />
          <Route path="june" element={<script.June />} />
          <Route path="july" element={<script.July />} />
          <Route path="august/" >
            <Route path="a" element={<script.AugustA />} />
            <Route path="b" element={<script.AugustB />} />
          </Route>
          <Route path="september/" >s
            <Route path="a" element={<script.SeptemberA />} />
            <Route path="b" element={<script.SeptemberB />} />
          </Route>
          <Route path="october/" >
            <Route path="a" element={<script.OctoberA />} />
            <Route path="b" element={<script.OctoberB />} />
          </Route>
          <Route path="november/" >
            <Route path="a" element={<script.NovemberA />} />
            <Route path="b" element={<script.NovemberB />} />
          </Route>
          <Route path="december/" >
            <Route path="a" element={<script.DecemberA />} />
            <Route path="b" element={<script.DecemberB />} />
          </Route>
          <Route path="finale/" >
            <Route path="a" element={<script.FinaleA />} />
            <Route path="b" element={<script.FinaleB />} />
          </Route>
          <Route path="credits" element={<script.Credits />} />
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
