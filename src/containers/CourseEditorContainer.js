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
import widgetService from "../services/WidgetService"
import {READ_MODULES_FOR_COURSE} from "../actions/courseModuleActions";
import {READ_LESSONS_FOR_MODULE} from "../actions/courseLessonActions";
import {READ_TOPICS_FOR_LESSON} from "../actions/courseTopicActions";
import {READ_WIDGETS_FOR_TOPIC} from "../actions/courseWidgetActions"
import CourseEditorMobileToolbarContainer from "./CourseEditorMobileToolbarContainer";
import CourseWidgetListContainer from "./CourseWidgetListContainer";

class CourseEditorContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            // widgets: [{widgetname: 'Widget 1', widgettype: 'Heading'}],
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
                if(topicId) {
                    this.props.findWidgetsForTopic(topicId)
                }
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
                    this.props.findWidgetsForTopic(topicId)
                } else {
                    this.props.findTopicsForLesson(lessonId, "a")
                    this.props.findWidgetsForTopic("e")
                }
            } else {
                this.props.findTopicsForLesson("b", "c")
            }
        } else if((lessonId && lessonId !== prevProps.match.params.lessonId) ||
            (topicId !== prevProps.match.params.topicId)) {
            if(topicId) {
                this.props.findTopicsForLesson(lessonId, topicId)
                this.props.findWidgetsForTopic(topicId)
            } else {
                this.props.findTopicsForLesson(lessonId, "d")
                this.props.findWidgetsForTopic("f")
            }
        } else if (topicId && topicId !== prevProps.match.params.topicId) {
            this.props.findWidgetsForTopic(topicId)
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
                        <CourseWidgetListContainer/>
                        {/*{*/}
                        {/*    <CourseEditorWidgetPaneComponent*/}
                        {/*        widgets={this.state.widgets}*/}
                        {/*    />*/}
                        {/*}*/}
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
            type: READ_LESSONS_FOR_MODULE,
            lessons: lessons,
            moduleId: moduleId
        })),
    findTopicsForLesson: (lessonId, topicId) => topicService.findTopicsForLesson(lessonId)
        .then(topics => dispatch({
            type: READ_TOPICS_FOR_LESSON,
            topics: topics,
            lessonId: lessonId,
            topicId: topicId,
            // moduleId: moduleId,
            // courseId: courseId
        })),
    findWidgetsForTopic: (topicId) => widgetService.findWidgetsForTopic(topicId)
        .then(widgets => dispatch({
            type: READ_WIDGETS_FOR_TOPIC,
            widgets: widgets,
            topicId: topicId
        }))
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(CourseEditorContainer)