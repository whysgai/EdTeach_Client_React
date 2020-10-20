import React from "react";
import CourseEditorWidgetPaneComponent from "../components/course_editor/CourseEditorWidgetPaneComponent";
import {Link} from "react-router-dom";
import {findAllCourses, findCourseById} from "../services/CourseService";
import CourseEditorMobileToolbarComponent from "../components/course_editor/CourseEditorMobileToolbarComponent";
import CourseModuleListContainer from "./CourseModuleListContainer";
import CourseLessonListContainer from "./CourseLessonListContainer";
import CourseTopicListContainer from "./CourseTopicListContainer";
import {connect} from "react-redux";
import moduleService from "../services/ModuleService"
import lessonService from "../services/LessonService"
import topicService from "../services/TopicService"
import {READ_MODULES_FOR_COURSE} from "../actions/courseModuleActions";
import {READ_LESSONS} from "../actions/courseLessonActions";
import {READ_TOPICS} from "../actions/courseTopicActions";
import CourseEditorMobileToolbarContainer from "./CourseEditorMobileToolbarContainer";

class CourseEditorContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            widgets: [{widgetname: 'Widget 1', widgettype: 'Heading'}],
        }
    }

    componentDidMount() {
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        const topicId = this.props.match.params.topicId
        this.props.findCourseById(courseId)
        this.props.findModulesForCourse(courseId)
        if(moduleId) {
            this.props.findLessonsForModule(moduleId)
            if(lessonId) {
                this.props.findTopicsForLesson(topicId, lessonId)
            }
        }


    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        const topicId = this.props.match.params.topicId

        if(moduleId && moduleId !== prevProps.match.params.moduleId) {
            this.props.findLessonsForModule(moduleId)
            if(lessonId) {
                if(topicId) {
                    this.props.findTopicsForLesson(lessonId, topicId)
                } else {
                    this.props.findTopicsForLesson(lessonId, "a")
                }
            } else {
                this.props.findTopicsForLesson("b", "c")
            }
        } else if((lessonId && lessonId !== prevProps.match.params.lessonId) ||
            (topicId !== prevProps.match.params.topicId)) {
            if(topicId) {
                this.props.findTopicsForLesson(lessonId, topicId)
            } else {
                this.props.findTopicsForLesson(lessonId, "d")
            }
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <h1 className="col-11">{this.props.course.title}</h1>
                    <Link className="btn btn-outline-dark col-1 btn-align-veritcal" to='/course_manager/table'>
                        <i className="fa fa-times-circle-o" aria-hidden="true"/>
                    </Link>
                </div>
                <div className="editorMobileNav row">
                    <CourseEditorMobileToolbarContainer/>
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
        })),
    findModulesForCourse: (courseId) => moduleService.findModulesForCourse(courseId)
        .then(modules => dispatch({
            type: READ_MODULES_FOR_COURSE,
            modules: modules
        })),
    // findLessonsForModule: (moduleId) => lessonService.findLessonsForModule(moduleId)
    //     .then(lessons => dispatch({
    //         type: READ_LESSONS,
    //         lessons: lessons
    //     })),
    // findTopicsForLesson: (lessonId) => topicService.findTopicsForLesson(lessonId)
    //     .then(topics => dispatch({
    //         type: READ_TOPICS,
    //         topics: topics
    //     }))
    findLessonsForModule: (moduleId) => lessonService.findLessonsForModule(moduleId)
        .then(lessons => dispatch({
            type: READ_LESSONS,
            lessons: lessons,
            moduleId: moduleId
        })),
    findTopicsForLesson: (lessonId, topicId) => topicService.findTopicsForLesson(lessonId)
        .then(topics => dispatch({
            type: READ_TOPICS,
            topics: topics,
            lessonId: lessonId,
            topicId: topicId,
            // moduleId: moduleId,
            // courseId: courseId
        }))
        .then(status => console.log("Called find topics for lesson : Topic ID: " + topicId + " Lesson ID: " + lessonId))
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(CourseEditorContainer)