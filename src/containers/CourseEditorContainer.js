import React from "react";
import CourseEditorWidgetPaneComponent from "../components/course_editor/CourseEditorWidgetPaneComponent";
import {Link} from "react-router-dom";
import {findAllCourses, findCourseById} from "../services/CourseService";
import CourseEditorMobileNavComponent from "../components/course_editor/CourseEditorMobileNavComponent";
import CourseModuleListContainer from "./CourseModuleListContainer";
import CourseLessonListContainer from "./CourseLessonListContainer";
import CourseTopicListContainer from "./CourseTopicListContainer";
import {connect} from "react-redux";
import moduleService from "../services/ModuleService"
import lessonService from "../services/LessonService"
import topicService from "../services/TopicService"
import {READ_MODULES} from "../actions/courseModuleActions";
import {READ_LESSONS} from "../actions/courseLessonActions";
import {READ_TOPICS} from "../actions/courseTopicActions";

class CourseEditorContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            // course: {},
            // modules: [{modname: 'Module 1'}, {modname: 'Module 2'}, {modname: 'Module 3'}, {modname: 'Module 4'}, {modname: 'Module 5'}],
            // lessons: [{lessonname: 'Lesson 1'},{lessonname: 'Lesson 2'},{lessonname: 'Lesson 3'}],
            // topics: [{topicname: 'Topic 1'}, {topicname: 'Topic 2'}, {topicname: 'Topic 3'}],
            widgets: [{widgetname: 'Widget 1', widgettype: 'Heading'}],
        }
    }

    componentDidMount() {
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        //const topicId = this.props.match.params.topicId
        this.props.findCourseById(courseId)
        this.props.findModulesForCourse(courseId)
        if(moduleId) {
            this.props.findLessonsForModule(moduleId)
            if(lessonId) {
                this.props.findTopicsForLesson(lessonId)
            }

        }


    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        //const topicId = this.props.match.params.topicId
        if(moduleId !== prevProps.match.params.moduleId) {
            this.props.findLessonsForModule(moduleId)
            if(lessonId) {
                this.props.findTopicsForLesson(lessonId)
            }
        } else if(lessonId !== prevProps.match.params.lessonId) {
            this.props.findTopicsForLesson(lessonId)
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <h1 className="col-11">{this.props.course.title}</h1>
                    <Link className="btn btn-outline-dark col-1 btn-align-veritcal" to='/course_manager'>
                        <i className="fa fa-times-circle-o" aria-hidden="true"/>
                    </Link>
                </div>
                {/*<div className="editorMobileNav row">*/}
                {/*    {*/}
                {/*        <CourseEditorMobileNavComponent*/}
                {/*            modules={this.props.modules}*/}
                {/*            lessons={this.state.lessons}*/}
                {/*            topics={this.state.topics}*/}
                {/*        />*/}
                {/*    }*/}
                {/*</div>*/}
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
            type: READ_MODULES,
            modules: modules
        })),
    findLessonsForModule: (moduleId, courseId) => lessonService.findLessonsForModule(moduleId)
        .then(lessons => dispatch({
            type: READ_LESSONS,
            lessons: lessons,
            moduleId: moduleId
        })),
    findTopicsForLesson: (lessonId, moduleId, courseId) => topicService.findTopicsForLesson(lessonId)
        .then(topics => dispatch({
            type: READ_TOPICS,
            topics: topics,
            lessonId: lessonId,
            moduleId: moduleId,
            courseId: courseId
        }))

})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(CourseEditorContainer)