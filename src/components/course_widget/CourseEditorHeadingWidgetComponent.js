import React from "react";


const CourseEditorHeadingWidgetComponent = ({widget, updateLocalWidget, preview}) =>
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
                        <select className="form-control"
                                defaultValue={widget.heading ? widget.heading : "h1"}
                                onChange={(event) => updateLocalWidget({
                                    ...widget,
                                    heading: event.target.value
                                })}>
                            <option value="h1">Heading 1</option>
                            <option value="h2">Heading 2</option>
                            <option value="h3">Heading 3</option>
                            <option value="h4">Heading 4</option>
                            <option value="h5">Heading 5</option>
                            <option value="h6">Heading 6</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="heading-text" className="d-none">Heading Text</label>
                        <input className="form-control wbdv-field" id="heading-text"
                               placeholder="Heading text"
                               value={!widget.text ? "Text" : widget.text}
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
            <span className={widget.heading ? widget.heading : "h1"}>{!widget.text ? "Heading Text" : widget.text}</span>
        </div>

    </div>

export default CourseEditorHeadingWidgetComponent