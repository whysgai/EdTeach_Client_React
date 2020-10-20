import React from "react";
import {Link} from "react-router-dom";
import CourseEditorMobileNavComponent from "./CourseEditorMobileNavComponent";
import CourseModuleListContainer from "../../containers/CourseModuleListContainer";
import CourseLessonListContainer from "../../containers/CourseLessonListContainer";
import CourseTopicListContainer from "../../containers/CourseTopicListContainer";
import CourseEditorWidgetPaneComponent from "./CourseEditorWidgetPaneComponent";

const CourseEditorComponent = ({course, modules, lessons, topics, widgets}) =>
    <div>
        <div className="row">
            <h1 className="col-11">{course.title}</h1>
            <Link className="foo btn btn-outline-dark col-1 btn-align-veritcal" to={'/course_manager/table'} exact>
                <i className="fa fa-times-circle-o" aria-hidden="true"/>
            </Link>
        </div>
        <div className="editorMobileNav row">
            {
                <CourseEditorMobileNavComponent
                    modules={modules}
                    lessons={lessons}
                    topics={topics}
                />
            }
        </div>
        <div className="row">
            <CourseModuleListContainer/>
            <div className="col-md-8 border">
                <CourseLessonListContainer/>
                <CourseTopicListContainer/>
                {
                    <CourseEditorWidgetPaneComponent
                        widgets={widgets}
                    />
                }
            </div>
        </div>
    </div>

export default CourseEditorComponent