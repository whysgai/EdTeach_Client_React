import React from "react";
import CourseModuleComponent from "../components/course_editor/CourseModuleComponent";
import CourseModuleItemComponent from "../components/course_editor/CourseModuleItemComponent";
import CourseLessonComponent from "../components/course_editor/CourseLessonComponent";
import CourseTopicComponent from "../components/course_editor/CourseTopicComponent";
import CourseEditorWidgetComponent from "../components/course_editor/CourseEditorWidgetComponent";
import CourseLessonItemComponent from "../components/course_editor/CourseLessonItemComponent";
import CourseTopicItemComponent from "../components/course_editor/CourseTopicItemComponent";
import CourseEditorWidgetPaneComponent from "../components/course_editor/CourseEditorWidgetPaneComponent";

//({showEditor, modules, lessons, topics, widgets})

class CourseEditorContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            course: 'Sample Course',
            modules: [{modname: 'Module 1'}, {modname: 'Module 2'}, {modname: 'Module 3'}, {modname: 'Module 4'}, {modname: 'Module 5'}],
            lessons: [{lessonname: 'Lesson 1'},{lessonname: 'Lesson 2'},{lessonname: 'Lesson 3'}],
            topics: [{topicname: 'Topic 1'}, {topicname: 'Topic 2'}, {topicname: 'Topic 3'}],
            widgets: [{widgetname: 'Widget 1', widgettype: 'Heading'}],
        }
    }


    render() {
        return (
            <div>
                <div className="row">
                    <h1 className="col-11">Course Editor - Course Name</h1>
                    <Link className="btn btn-outline-dark col-1" to='/course_manager' exact>
                        <i className="fa fa-times-circle-o" aria-hidden="true"/>
                    </Link>
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
        )
    }
}

export default CourseEditorContainer
