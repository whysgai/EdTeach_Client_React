import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route}
    from 'react-router-dom'
//import './index.css';
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css"
import App from './App';
import * as serviceWorker from './serviceWorker';
import NavbarComponent from "./components/NavbarComponent";
import LandingPageContainer from "./containers/LandingPageContainer";
import CourseManagerContainer from "./containers/CourseManagerContainer";
import CourseEditorContainer from "./containers/CourseEditorContainer";

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
    <div>
        <BrowserRouter>
            <NavbarComponent/>
            <div className="container">
                <Route path='/' exact>
                    <LandingPageContainer/>
                </Route>
                <Route path='/course_manager' exact>
                    <CourseManagerContainer instructor="Will" term="Fall 2020"/>
                </Route>
                <Route path='/course_editor/:courseId' exact component={CourseEditorContainer}>
                    {/*<CourseEditorContainer/>*/}
                </Route>
            </div>
        </BrowserRouter>
    </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
