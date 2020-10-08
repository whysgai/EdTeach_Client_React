import React from "react";

const CourseEditorMobileNavComponent = ({modules, lessons, topics}) =>
    <form className="d-block d-md-none pad-clear col-md-8">
        <div className="row">
            <label htmlFor="module" className="d-none col-form-label">Module</label>
            <div className="col-12">
                <select className="custom-select wbdv-field wbdv-role col-9" id="module">
                    <option value="Modules">Modules</option>
                    {
                        modules.map((module, index) =>
                            <option>{module.modname}</option>
                        )
                    }
                </select>
                <div className="col-1 d-inline"></div>
                <button className="btn btn-primary col-2">
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                </button>
            </div>
        </div>
        <div className="row">
            <label htmlFor="lesson" className="d-none col-form-label">Lesson</label>
            <div className="col-12">
                <select className="custom-select wbdv-field wbdv-role col-9" id="lesson">
                    <option value="Lessons">Lessons</option>
                    {
                        lessons.map((lesson, index) =>
                            <option>{lesson.lessonname}</option>
                        )
                    }
                </select>
                <div className="col-1 d-inline"></div>
                <button className="btn btn-primary col-2">
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                </button>
            </div>
        </div>
        <div className="row">
            <label htmlFor="topic" className="d-none col-form-label">Module</label>
            <div className="col-12">
                <select className="custom-select wbdv-field wbdv-role col-9" id="topic">
                    <option value="Topics">Topics</option>
                    {
                        topics.map((topic, index) =>
                            <option>{topic.topicname}</option>
                        )
                    }
                </select>
                <div className="col-1 d-inline"></div>
                <button className="btn btn-primary col-2">
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                </button>
            </div>
        </div>
        <div className="form-group row">
           <div className="col-sm-12">
                <a href="" className="btn btn-primary btn-block wbdv-login">Apply</a>
            </div>
        </div>
    </form>

export default CourseEditorMobileNavComponent;