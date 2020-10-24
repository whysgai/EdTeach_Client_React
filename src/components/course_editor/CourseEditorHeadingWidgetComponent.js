import React from "react";


const CourseEditorHeadingWidgetComponent = ({widget}) =>
    <div className="">
        <div className="form-group">
            <input className="form-control wbdv-field wbdv-username" id="username"
                   placeholder="Heading test"/>
        </div>
        <div className="form-group">
            <select className="form-control">
                <option>Heading 1</option>
                <option>Heading 2</option>
                <option>Heading 3</option>
                <option>Heading 4</option>
                <option>Heading 5</option>
            </select>
        </div>
        <div className="form-group">
            <input className="form-control wbdv-field wbdv-username" id="username"
                   placeholder="Widget name"/>
        </div>
        <div className="form-group">
            <h4>Preview</h4>
        </div>
        <div className="form-group">
            <h2>Heading Text</h2>
        </div>
    </div>

export default CourseEditorHeadingWidgetComponent