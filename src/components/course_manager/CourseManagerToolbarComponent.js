import React from "react";
import {Link} from "react-router-dom";

const CourseManagerToolbarComponent = ({term, view, captureNewCourseTitle, addCourse, changeView}) =>
    <div>
        <form>
            <div className="row bg-light">
                {/*<label htmlFor="newcourse" className="col-12 col-lg-5">*/}
                {/*    <h2 className="title center-text bg-light wbdv-label wbdv-course-manager">Course List - {this.props.term}</h2>*/}
                {/*</label>*/}
                <h2 className="title center-text bg-light btn-align-veritcal wbdv-label wbdv-course-manager col-12 col-lg-5">Course List - {term}</h2>
                <div className="col-sm-9 col-lg-5 title-align">
                    <input className="form-control btn-align-veritcal wbdv-field wbdv-new-course"
                           id="newcourse" placeholder="Add new course" type="text"
                           onChange={captureNewCourseTitle}/>
                </div>
                <div className="col-sm-3 col-lg-2 title-align">
                    <button className="btn btn-primary mx-1 wbdv-button wbdv-add-course col-12 col-sm-5 col-md-4"
                            onClick={addCourse}>
                        <i className="fa fa-plus-circle" aria-hidden="true"/>
                    </button>
                    {
                        view === 'cards' &&
                            <Link to="/course_manager/table">
                                <button className="wbdv-button wbdv-grid-layout btn btn-primary mx-1 col-12 col-sm-5 col-md-4">
                                    <i className="fa fa-list" aria-hidden="true"/>
                                </button>
                            </Link>
                    }
                    {
                        view === 'table' &&
                            <Link to="/course_manager/grid">
                                <button className="wbdv-button btn btn-primary mx-1 col-12 col-sm-5 col-md-4">
                                    <i className="fa fa-th " aria-hidden="true"/>
                                </button>
                            </Link>
                    }
                </div>
            </div>
        </form>
    </div>

export default CourseManagerToolbarComponent;