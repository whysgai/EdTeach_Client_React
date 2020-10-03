import React from "react";
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
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
                    <label htmlFor="newcourse" className="col-sm-6">
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
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className="btn btn-secondary active">
                            <input type="radio" name="options" id="option1" autoComplete="off" checked/> Table
                        </label>
                        <label className="btn btn-secondary">
                            <input type="radio" name="options" id="option2" autoComplete="off"/> Cards
                        </label>
                    </div>

                </div>
            </form>
            <button className="btn btn-outline-info testBtn">TEST</button>

            {
                this.state.view === 'table' &&
                    <CourseTableComponent courses={this.state.courses}/>
            }
            {
                !this.state.view === 'grid' &&
                    <CourseGridComponent/>
            }

        </div>
        );
    }

}

export default CourseManagerComponent;