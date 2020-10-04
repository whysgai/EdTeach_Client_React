import React from "react";
import CourseRowComponent from "../course_manager/CourseRowComponent";
import CourseModuleItemComponent from "./CourseModuleItemComponent";

const CourseModuleComponent = ({modules, lessons, topics}) =>
    <div className="border row">

            <div className="col-sm-12">
                <p>Course Name</p>
            </div>
            <div className="border col-sm-4">
                <p>List of modules goes here</p>
                <div className="wbdv-module-list d-none d-sm-block ">
                    <ul className="list-of-btns ">
                        {
                            modules.map((module, index) =>
                                <CourseModuleItemComponent
                                    module={module}
                                    lessons={lessons}
                                    topics={topics}
                                />
                            )
                        }


                        <li className="btn btn-dark btn-block wbdv-module-item">Module 2 -
                            <span className="wbdv-module-item-title">Novels</span>
                            <a href="#" className="pull-right font-white wbdv-module-item-delete-btn">
                                <i className="fa fa-times-circle" aria-hidden="true"/>
                            </a>
                        </li>
                        <li className="btn btn-dark btn-block wbdv-module-item">Module 3 -
                            <span className="wbdv-module-item-title">Short Stories</span>
                            <a href="#" className="pull-right font-white wbdv-module-item-delete-btn">
                                <i className="fa fa-times-circle" aria-hidden="true"/>
                            </a>
                        </li>
                        <li className="btn btn-dark btn-block wbdv-module-item">Module 4 -
                            <span className="wbdv-module-item-title">Textbooks</span>
                            <a href="#" className="pull-right font-white wbdv-module-item-delete-btn">
                                <i className="fa fa-times-circle" aria-hidden="true"/>
                            </a>
                        </li>
                    </ul>
                    <button className="btn btn-primary btn-block wbdv-module-item-add-btn">Add Module</button>
                </div>
            </div>
            <div className="col-sm-8 border">
                <div className="border">
                    <p>List of lessons</p>
                    <div className="border">
                        <p>List of topics</p>
                        <div className="border">
                            <p>Widget stuff</p>
                        </div>
                    </div>
                </div>
            </div>


    </div>

export default CourseModuleComponent