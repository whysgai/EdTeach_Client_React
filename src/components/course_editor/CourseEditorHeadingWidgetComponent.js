import React from "react";


const CourseEditorHeadingWidgetComponent = ({widget, updateLocalWidget}) =>
    <div className="">
        <div className="form-group">
            <label for="widget-title" className="d-none">Widget Title</label>
            <input className="form-control wbdv-field" id="widget-name"
                   placeholder={widget.title}/>
        </div>
        <div className="form-group">
            <select className="form-control" defaultValue={widget.heading}>
                <option value="H1">Heading 1</option>
                <option value="H2">Heading 2</option>
                <option value="H3">Heading 3</option>
                <option value="H4">Heading 4</option>
                <option value="H5">Heading 5</option>
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="heading-text" className="d-none">Heading Name</label>
            <input className="form-control wbdv-field" id="heading-text"
                   placeholder="Heading text"/>
        </div>
        <div className="form-group">
            <h4>Preview</h4>
        </div>
        <div className="form-group">
            <h2>Heading Text</h2>
        </div>
    </div>

export default CourseEditorHeadingWidgetComponent