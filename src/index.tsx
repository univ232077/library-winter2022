import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HeaderComponent from './components/header/header.component'
import FooterComponent from "./components/footer/footer.component";
import CatalogComponent from "./components/catalog/catalog.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookPage from "./components/bookpage/bookpage.component";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <HeaderComponent />
          <Routes>
              <Route path="/" element={<div>Main page</div>}/>
              <Route path="/catalog" element={<CatalogComponent />} />
              <Route path="/book/:id" element={<BookPage />} />
          </Routes>
          <FooterComponent />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
