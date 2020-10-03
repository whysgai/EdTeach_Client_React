import React from "react";
import CourseTableComponent from "./CourseTableComponent";
import CourseDeckComponent from "./CourseDeckComponent";
import {findAllCourses, createCourse, deleteCourse, updateCourse,} from "../services/CourseService"
import CourseRowComponent from "./CourseRowComponent";

class CourseManagerComponent extends React.Component {

    // state = {}

    constructor() {
        super();
        this.state = {
            courses: [],
            view: 'table',
            newTitle: ''
        };
    }

    componentDidMount() {
        findAllCourses()
            .then(courses => {
                this.setState({
                    courses: courses
                })
            })
    }

    captureTitleChange = (e) => {
        this.setState({ newTitle: e.target.value });
    };

    changeView = () => {
        if (this.state.view === 'cards') {
            this.setState({view: 'table'})
        } else if (this.state.view === 'table') {
            this.setState({view: 'cards'})
        }
    }

    viewTable = (e) => {
        this.setState({view: 'table'})
    }

    viewCards = (e) => {
        this.setState({view: 'cards'})
    }

    addCourse = (e) => {
        e.preventDefault();
        console.log(this.state.newTitle)
        if (this.state.newTitle != "") {
            const newCourse = {
                title: this.state.newTitle,
                owner: this.props.instructor,
                modified: (new Date()).toDateString()
            }
            createCourse(newCourse)
                .then(serverCourse => this.setState(prevState => ({
                        courses : [
                            ...prevState.courses, serverCourse
                        ]
                    })
                ))
        }
    }

    deleteCourse = (course) => {
        console.log("Delete: " + course._id)
        deleteCourse(course)
            .then(status => {
                this.setState(prevState => {
                    return ({
                        courses: prevState
                            .courses
                            .filter(function(crs) {
                                return crs._id !== course._id
                            })
                    })
                })
            })
    }


// {this.state.editing && <input
// onChange={(e) => this.props.updateForm({
//     updatedCourseTitle: e.target.value
// })}
// value={this.props.passedState.updatedCourseTitle}
// placeholder="Edited Course Title"/>
// }
    // onChange={e} => this.updateForm(newTitle = e.target.value)></input>

    modifyDOM = (e) => {
        e.preventDefault();
        console.log("TEST CLICK")
    }

    render() {
        return(<div className="CourseManager">
            <form>
                <div className="form-group row bg-light">
                    <label htmlFor="newcourse" className="col-sm-4">
                        <h1 className="title center-text bg-light wbdv-label wbdv-course-manager">{this.props.instructor}'s Course List - {this.props.term}</h1>
                    </label>
                    <div className="col-sm-5 title-align">
                        <input className="form-control btn-align-veritcal wbdv-field wbdv-new-course"
                               id="newcourse" placeholder="Add a course" type="text" onChange={this.captureTitleChange}></input>

                    </div>
                    <div className="col-sm-1 title-align">
                        <button className="btn btn-primary btn-block wbdv-button wbdv-add-course" onClick={this.addCourse}>
                            <i className="fa fa-plus-circle" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="col-sm-1 title-align">
                        {
                            this.state.view === 'cards' &&
                                <button className="btn btn-primary btn-block wbdv-button " onClick={this.changeView}>
                                    <i className="fa fa-list" aria-hidden="true"></i>
                                </button>

                        }
                        {
                            this.state.view === 'table' &&
                            <button className="btn btn-primary btn-block wbdv-button " onClick={this.changeView}>
                                <i className="fa fa-th " aria-hidden="true"></i>
                            </button>
                        }
                    </div>



                </div>
            </form>
            <button className="btn btn-outline-info testBtn">TEST</button>

            {
                this.state.view === 'table' &&
                    <CourseTableComponent courses={this.state.courses} deleteCourse={this.deleteCourse}/>
            }
            {
                this.state.view === 'cards' &&
                    <CourseDeckComponent/>
            }

        </div>
        );
    }

}

export default CourseManagerComponent;