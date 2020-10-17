import React from "react";
import CourseTableComponent from "../components/course_manager/CourseTableComponent";
import CourseDeckComponent from "../components/course_manager/CourseDeckComponent";
import {findAllCourses, createCourse, deleteCourse, updateCourse,} from "../services/CourseService"
import {Route} from "react-router";
import CourseManagerToolbarComponent from "../components/course_manager/CourseManagerToolbarComponent";

class CourseManagerContainer extends React.Component {

    // state = {}

    constructor() {
        super();
        this.state = {
            courses: [],
            // modules: [{modname: 'Module 1'}, {modname: 'Module 2'}, {modname: 'Module 3'}, {modname: 'Module 4'}, {modname: 'Module 5'}],
            // lessons: [{lessonname: 'Lesson 1'},{lessonname: 'Lesson 2'},{lessonname: 'Lesson 3'}],
            // topics: [{topicname: 'Topic 1'}, {topicname: 'Topic 2'}, {topicname: 'Topic 3'}],
            widgets: [{widgetname: 'Widget 1', widgettype: 'Heading'}],
            view: 'table',
            newTitle: '',
            courseBeingRenamed: ''
        };
    }

    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses = () => {
        findAllCourses()
            .then(courses => {
                this.setState({
                    courses: courses
                })
            })
    }

    captureNewCourseTitle = (e) => {
        this.setState({ newTitle: e.target.value });
    };

    changeView = () => {
        if (this.state.view === 'cards') {
            this.setState({view: 'table'})
        } else if (this.state.view === 'table') {
            this.setState({view: 'cards'})
        }
    }

    addCourse = (e) => {
        e.preventDefault();
        console.log(this.state.newTitle);
        if (this.state.newTitle !== "") {
            const newCourse = {
                title: this.state.newTitle,
                owner: this.props.instructor,
                modified: (new Date()).toDateString()
            };
            createCourse(newCourse)
                .then(serverCourse => this.setState(prevState => ({
                        courses : [
                            ...prevState.courses, serverCourse
                        ]
                    })
                ));
            this.state.newTitle = '';
            console.log(this.state.newTitle);
        }
    }

    renameCourse = (course) => {
        this.setState({
            courseBeingRenamed: course,
            newTitle: course.title
        });
        console.log(this.state.courseBeingRenamed);
    }

    captureRenamedCourseTitle = (e) => {
        e.preventDefault();
        this.setState({ newTitle: e.target.value });
    }

    saveRenamedCourseTitle = (course) => {
        console.log(this.state.newTitle);
        const renamedCourse = course;
        renamedCourse.title = this.state.newTitle;
        // Update Course
        updateCourse(course, renamedCourse)
            .then( status => {
                    this.refreshCourses()
                    this.setState({
                        courseBeingRenamed: {},
                        newTitle: ''
                    })
                }
            )
    }

    deleteCourse = (course) => {
        console.log("Delete: " + course._id);
        deleteCourse(course)
            .then(status => {
                this.setState(prevState => {
                    return ({
                        courses: prevState
                            .courses
                            .filter(function(crs) {
                                return crs._id !== course._id
                            })
                    });
                });
            });
    }

    modifyDOM = (e) => {
        e.preventDefault();
        console.log("TEST CLICK")
    }

    render() {
        return(
            <div className="CourseManager">
                <CourseManagerToolbarComponent
                    term={this.props.term}
                    view={this.state.view}
                    captureNewCourseTitle={this.captureNewCourseTitle}
                    addCourse={this.addCourse}
                    changeView={this.changeView}
                />
                <CourseTableComponent
                    courses={this.state.courses}
                    deleteCourse={this.deleteCourse}
                    renameCourse={this.renameCourse}
                    courseBeingRenamed={this.state.courseBeingRenamed}
                    captureRenamedCourseTitle={this.captureRenamedCourseTitle}
                    saveRenamedCourseTitle={this.saveRenamedCourseTitle}
                />
            </div>
        );
    }
}

export default CourseManagerContainer;