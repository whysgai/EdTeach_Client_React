import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css"
import App from './App';
import * as serviceWorker from './serviceWorker';

import NavbarComponent from "./components/NavbarComponent";
import LandingPageContainer from "./containers/LandingPageContainer";
import CourseManagerTableContainer from "./containers/CourseManagerTableContainer"
import CourseManagerCardsContainer from "./containers/CourseManagerCardsContainer";
import CourseEditorContainer from "./containers/CourseEditorContainer";

import loginComponent from "./components/login_register_profile/loginComponent";
import registerUserComponent from "./components/login_register_profile/registerUserComponent";
import profileComponent from "./components/login_register_profile/profileComponent";

import courseReducer from "./reducers/courseReducer";
import moduleReducer from "./reducers/moduleReducer";
import lessonReducer from "./reducers/lessonReducer";
import topicReducer from "./reducers/topicReducer";
import widgetReducer from "./reducers/widgetReducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";


const reducers = combineReducers({
    // Shorthand
    moduleReducer,
    lessonReducer,
    topicReducer,
    // Longhand
    courseReducer: courseReducer,
    widgetReducer: widgetReducer
})
const store = createStore(reducers)

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
    <Provider store={store}>
        <div>
            <BrowserRouter>
                <NavbarComponent/>
                <div className="container">
                    <Route path='/' exact>
                        <LandingPageContainer/>
                    </Route>
                    <Route path='/course_manager/table' exact>
                        <CourseManagerTableContainer instructor="Will" term="Fall 2020"/>
                    </Route>
                    <Route path='/course_manager/grid' exact>
                        <CourseManagerCardsContainer instructor="Will" term="Fall 2020"/>
                    </Route>
                    <Route path={[
                        '/course_editor/:courseId',
                        '/course_editor/:courseId/modules/:moduleId',
                        '/course_editor/:courseId/modules/:moduleId/lessons/:lessonId',
                        '/course_editor/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId',
                    ]} exact component={CourseEditorContainer}/>
                    <Route path='/login' component={loginComponent()}/>
                    <Route path='/register' component={registerUserComponent()}/>
                    <Route path='/profile' component={profileComponent()}/>
                </div>
            </BrowserRouter>
        </div>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
