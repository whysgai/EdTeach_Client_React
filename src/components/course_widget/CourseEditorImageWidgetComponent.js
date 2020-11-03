import React from "react";

const CourseEditorImageWidgetComponent = ({widget, updateLocalWidget, preview}) =>

    <div className="">
        {
            !preview &&
            <div>
                <div className="form-group">
                    <label htmlFor="widget-title" className="d-none">Widget Title</label>
                    <input className="form-control wbdv-field" id="widget-name"
                           placeholder="Widget title"
                           value={widget.title}
                           onChange={(event) => updateLocalWidget({
                               ...widget,
                               title: event.target.value
                           })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image-url" className="d-none">Image URL</label>
                    <input className="form-control wbdv-field" id="image-url"
                           placeholder="Image url"
                           value={!widget.text ? "www..." : widget.text}
                           onChange={(event) => updateLocalWidget({
                               ...widget,
                               text: event.target.value
                           })}
                    />
                </div>
                <div className="form-group">
                    <h4>Preview</h4>
                </div>
            </div>
        }
        <div className="form-group">
            <p><pre>{!widget.text ? "URL..." : widget.text}</pre></p>
            <img src={!widget.text ? "#" : widget.text} alt="Widget image designated by user"/>
        </div>
    </div>


export default CourseEditorImageWidgetComponent