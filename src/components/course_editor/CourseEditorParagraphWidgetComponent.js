import React from "react";

const CourseEditorParagraphWidgetComponent = ({widget, updateLocalWidget}) =>

    <div className="">
        <div className="form-group">
            <label htmlFor="widget-title" className="d-none">Widget Title</label>
            <input className="form-control wbdv-field" id="widget-name"
                   placeholder={widget.title}/>
        </div>
        <div className="form-group">
            <label htmlFor="paragraph-text" className="d-none">Paragraph Text</label>
            <textarea className="form-control wbdv-field" id="paragraph-text"
                   placeholder="Text"/>
        </div>
        <div className="form-group">
            <h4>Preview</h4>
        </div>
        <div className="form-group">
            <h2>Heading Text</h2>
        </div>

    </div>


export default CourseEditorParagraphWidgetComponent