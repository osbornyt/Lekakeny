import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header';
import Whysection from './Components/Whysection';
import Start from './Components/Start';
import Services from './Components/Services';
import Quote from './Components/Quote';
import Sectors from './Components/Sectos';
import Achieve from './Components/Achieve';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header></Header>
    <Whysection></Whysection>
    <Start msg="Let us help you secure your online legacy now!"></Start>
    <Services></Services>
    <Quote></Quote>
    <Sectors></Sectors>
    <Start msg="Ready to Transform Your Business in Kenya? Don't wait. The future is digital."></Start>
    <Achieve></Achieve>
    <Contact></Contact>
    <Footer></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
