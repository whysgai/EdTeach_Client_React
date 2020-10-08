import React from "react";
import CourseEditorContainer from "./CourseEditorContainer";
import CourseTableComponent from "../components/course_manager/CourseTableComponent";
import CourseDeckComponent from "../components/course_manager/CourseDeckComponent";
import {findAllCourses, createCourse, deleteCourse, updateCourse,} from "../services/CourseService"

class CourseManagerContainer extends React.Component {

    // state = {}

    constructor() {
        super();
        this.state = {
            courses: [],
            modules: [{modname: 'Module 1'}, {modname: 'Module 2'}, {modname: 'Module 3'}, {modname: 'Module 4'}, {modname: 'Module 5'}],
            lessons: [{lessonname: 'Lesson 1'},{lessonname: 'Lesson 2'},{lessonname: 'Lesson 3'}],
            topics: [{topicname: 'Topic 1'}, {topicname: 'Topic 2'}, {topicname: 'Topic 3'}],
            widgets: [{widgetname: 'Widget 1', widgettype: 'Heading'}],
            view: 'cards',
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

    // showEditor = (editorView) => {
    //     console.log("Switch editor display");
    //     this.setState({showEditor: editorView})
    // }

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
        if (this.state.newTitle != "") {
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

                {
                    !this.state.showEditor &&
                    <div>
                        <form>
                            <div className="row bg-light">
                                {/*<label htmlFor="newcourse" className="col-12 col-lg-5">*/}
                                {/*    <h2 className="title center-text bg-light wbdv-label wbdv-course-manager">Course List - {this.props.term}</h2>*/}
                                {/*</label>*/}
                                <h2 className="title center-text bg-light btn-align-veritcal wbdv-label wbdv-course-manager col-12 col-lg-5">Course List - {this.props.term}</h2>
                                <div className="col-sm-9 col-lg-5 title-align">
                                    <input className="form-control btn-align-veritcal wbdv-field wbdv-new-course"
                                           id="newcourse" placeholder="Add new course" type="text"
                                           onChange={this.captureNewCourseTitle}/>
                                </div>
                                <div className="col-sm-3 col-lg-2 title-align">
                                    <button className="btn btn-primary mx-1 wbdv-button wbdv-add-course col-12 col-sm-5 col-md-4"
                                            onClick={this.addCourse}>
                                        <i className="fa fa-plus-circle" aria-hidden="true"/>
                                    </button>
                                    {
                                        this.state.view === 'cards' &&
                                        <button className="wbdv-button wbdv-grid-layout btn btn-primary mx-1 col-12 col-sm-5 col-md-4"
                                                onClick={this.changeView}>
                                            <i className="fa fa-list" aria-hidden="true"/>
                                        </button>

                                    }
                                    {
                                        this.state.view === 'table' &&
                                        <button className="wbdv-button btn btn-primary mx-1 col-12 col-sm-5 col-md-4"
                                                onClick={this.changeView}>
                                            <i className="fa fa-th " aria-hidden="true"/>
                                        </button>
                                    }
                                </div>
                            </div>
                        </form>
                        {
                            this.state.view === 'table' &&
                                <CourseTableComponent
                                    courses={this.state.courses}
                                    deleteCourse={this.deleteCourse}
                                    renameCourse={this.renameCourse}
                                    courseBeingRenamed={this.state.courseBeingRenamed}
                                    captureRenamedCourseTitle={this.captureRenamedCourseTitle}
                                    saveRenamedCourseTitle={this.saveRenamedCourseTitle}
                                />
                        }
                        {
                            this.state.view === 'cards' &&
                                <CourseDeckComponent courses={this.state.courses}
                                    deleteCourse={this.deleteCourse}
                                    renameCourse={this.renameCourse}
                                    courseBeingRenamed={this.state.courseBeingRenamed}
                                    captureRenamedCourseTitle={this.captureRenamedCourseTitle}
                                    saveRenamedCourseTitle={this.saveRenamedCourseTitle}
                                />
                        }
                    </div>
                }
            </div>
        );
    }
}

export default CourseManagerContainer;