import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./styles/styles.css"
import App from './App';
import CourseListComponent from "./components/CourseListComponent";
import * as serviceWorker from './serviceWorker';
import NavbarComponent from "./components/NavbarComponent";
import CourseManagerComponent from "./components/CourseManagerComponent";

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
    <div>
        <NavbarComponent/>,
        <div className="container">
            <CourseManagerComponent instructor="Will" term="Fall 2020"/>
        </div>
    </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
