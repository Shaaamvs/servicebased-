import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nav from './Component/Nav';
import Banner from './Component/Banner';
import Secondcontent from './Component/Secondcontent';
import Services from './Component/Services';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Nav/>
    <Banner/>
    <Secondcontent/>
    <Services/>
  </React.StrictMode>
);

