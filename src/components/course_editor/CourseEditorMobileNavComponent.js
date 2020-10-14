import React from "react";

const CourseEditorMobileNavComponent = ({modules, lessons, topics}) =>
    <form className="d-block d-md-none pad-clear col-md-8">
        <div className="row mb-2">
            <label htmlFor="module" className="d-none col-form-label">Module</label>
            <div className="col-12 input-group">
                <select className="custom-select wbdv-field wbdv-role" id="module">
                    <option value="Modules">Modules</option>
                    {
                        modules.map((module, index) =>
                            <option>{module.modname}</option>
                        )
                    }
                </select>
                <div className="input-group-append">
                    <button className="btn btn-primary">
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                    </button>
                    <button className="btn btn-primary">
                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
        <div className="row mb-2">
            <label htmlFor="lesson" className="d-none col-form-label">Lesson</label>
            <div className="col-12 input-group">
                <select className="custom-select wbdv-field wbdv-role" id="lesson">
                    <option value="Lessons">Lessons</option>
                    {
                        lessons.map((lesson, index) =>
                            <option>{lesson.lessonname}</option>
                        )
                    }
                </select>
                <div className="input-group-append">
                    <button className="btn btn-primary">
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                    </button>
                    <button className="btn btn-primary">
                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
        <div className="row mb-2">
            <label htmlFor="topic" className="d-none col-form-label">Module</label>
            <div className="col-12 input-group">
                <select className="custom-select wbdv-field wbdv-role" id="topic">
                    <option value="Topics">Topics</option>
                    {
                        topics.map((topic, index) =>
                            <option>{topic.topicname}</option>
                        )
                    }
                </select>
                <div className="input-group-append">
                    <button className="btn btn-primary">
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                    </button>
                    <button className="btn btn-primary">
                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
        <div className="form-group row mb-2">
           <div className="col-sm-12">
                <a href="" className="btn btn-primary btn-block wbdv-login">Apply</a>
            </div>
        </div>
    </form>

export default CourseEditorMobileNavComponent;