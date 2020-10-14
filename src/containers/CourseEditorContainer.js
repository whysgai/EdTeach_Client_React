import React from "react";
import CourseEditorWidgetPaneComponent from "../components/course_editor/CourseEditorWidgetPaneComponent";
import {Link} from "react-router-dom";
import {findAllCourses, findCourseById} from "../services/CourseService";
import CourseEditorMobileNavComponent from "../components/course_editor/CourseEditorMobileNavComponent";
import CourseModuleListContainer from "./CourseModuleListContainer";
import CourseLessonListContainer from "./CourseLessonListContainer";
import CourseTopicListContainer from "./CourseTopicListContainer";
import {connect} from "react-redux";

//({showEditor, modules, lessons, topics, widgets})

class CourseEditorContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            course: {},
            modules: [{modname: 'Module 1'}, {modname: 'Module 2'}, {modname: 'Module 3'}, {modname: 'Module 4'}, {modname: 'Module 5'}],
            lessons: [{lessonname: 'Lesson 1'},{lessonname: 'Lesson 2'},{lessonname: 'Lesson 3'}],
            topics: [{topicname: 'Topic 1'}, {topicname: 'Topic 2'}, {topicname: 'Topic 3'}],
            widgets: [{widgetname: 'Widget 1', widgettype: 'Heading'}],
        }
    }

    componentDidMount() {
        // console.log(this.props)
        this.refreshCourse();
    }

    refreshCourse() {
        console.log(this.props.match.params.courseId)
        this.props.findCourseById(this.props.match.params.courseId)
    }

    render() {
        return (
            <div>
                <div className="row">
                    {/*<h1 className="col-11">From local state: {this.state.course.title}</h1>*/}
                    <h1 className="col-11">From props: {this.props.course.title}</h1>
                    <Link className="btn btn-outline-dark col-1 btn-align-veritcal" to='/course_manager'>
                        <i className="fa fa-times-circle-o" aria-hidden="true"/>
                    </Link>
                </div>
                <div className="editorMobileNav row">
                    {
                        <CourseEditorMobileNavComponent
                            modules={this.state.modules}
                            lessons={this.state.lessons}
                            topics={this.state.topics}
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
                                widgets={this.state.widgets}
                            />
                        }
                    </div>
                </div>
            </div>
        )
    }
}

// export default CourseEditorContainer

const stateToPropertyMapper = (state) => ({
    course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
    findCourseById: (courseId) => findCourseById(courseId)
        .then(course => dispatch({
            type: "SET_COURSES",
            course: course
        }))
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(CourseEditorContainer)