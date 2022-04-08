/*
 * @Author: hft
 * @Date: 2022-04-07 15:54:41
 * @LastEditors: hft
 * @LastEditTime: 2022-04-07 16:56:43
 * @Description: file content
 */
import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// react18的用法
const container: any = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
