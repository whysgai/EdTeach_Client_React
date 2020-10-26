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
                                defaultValue={widget.heading ? widget.text : "H1"}
                                onChange={(event) => updateLocalWidget({
                                    ...widget,
                                    heading: event.target.value
                                })}>
                            <option value="H1">Heading 1</option>
                            <option value="H2">Heading 2</option>
                            <option value="H3">Heading 3</option>
                            <option value="H4">Heading 4</option>
                            <option value="H5">Heading 5</option>
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
                </div>
        }
        <div className="form-group">
            <h4>Preview</h4>
        </div>
        <div className="form-group">
            <h2>Heading Text</h2>
        </div>

    </div>

export default CourseEditorHeadingWidgetComponent