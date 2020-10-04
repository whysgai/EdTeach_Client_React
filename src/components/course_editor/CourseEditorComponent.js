import React from "react";
import CourseModuleComponent from "./CourseModuleComponent";
import CourseModuleItemComponent from "./CourseModuleItemComponent";
import CourseLessonComponent from "./CourseLessonComponent";
import CourseTopicComponent from "./CourseTopicComponent";
import CourseEditorWidgetComponent from "./CourseEditorWidgetComponent";
import CourseLessonItemComponent from "./CourseLessonItemComponent";
import CourseTopicItemComponent from "./CourseTopicItemComponent";
import CourseEditorWidgetPaneComponent from "./CourseEditorWidgetPaneComponent";

const CourseEditorComponent = ({editorShowHide, modules, lessons, topics, widgets}) =>
    <div>
        <div className="row">
            <h1 className="col-11">Course Editor - Course Name</h1>
            <button className="btn btn-outline-dark col-1" onClick={editorShowHide}>
                <i className="fa fa-times-circle-o" aria-hidden="true"/>
            </button>
        </div>
        <div className="border row">
            <div className="border col-sm-4 wbdv-module-list d-none d-sm-block">
                    <ul className="list-of-btns ">
                        {
                            modules.map((module, index) =>
                                <CourseModuleItemComponent
                                    module={module}
                                />
                            )
                        }
                    </ul>
                    <button className="btn btn-primary btn-block wbdv-module-item-add-btn">Add Module</button>
            </div>
            <div className="col-sm-8 border">
                <div>
                    <ul className="marg-below nav nav-tabs wbdv-lesson-tabs d-none d-sm-flex">
                        {
                            lessons.map((lesson, index) =>
                                <CourseLessonItemComponent
                                    lesson={lesson}
                                />
                            )
                        }
                        <li className="nav-item">
                            <a href="#" className="nav-link wbdv-lesson-add-btn">
                                <i className="fa fa-plus-circle" aria-hidden="true"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="marg-below nav nav-pills wbdv-topic-pill-list d-none d-sm-flex">
                        {
                            topics.map((topic, index) =>
                                <CourseTopicItemComponent
                                    topic={topic}
                                />
                            )
                        }
                        <li className="nav-item wbdv-topic-add-btn">
                            <a className="nav-link" href="#">Add Topic</a>
                        </li>
                    </ul>
                </div>
                {
                    <CourseEditorWidgetPaneComponent
                        widgets={widgets}
                    />
                }
            </div>
        </div>
    </div>

export default CourseEditorComponent
