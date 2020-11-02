import React from "react";

const CourseEditorListWidgetComponent = ({widget, updateLocalWidget, preview}) =>
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
                            defaultValue={widget.list ? widget.list : "NA"}
                            onChange={(event) => updateLocalWidget({
                                ...widget,
                                list: event.target.value
                            })}>
                        <option value="NA">--Select a List Type--</option>
                        <option value="OL">Ordered List</option>
                        <option value="UL">Unordered List</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="heading-text" className="d-none">Heading Text</label>
                    <input className="form-control wbdv-field" id="heading-text" type="textarea"
                           placeholder="Enter one list item per line"
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
            <p><pre>{!widget.text ? "Text..." : widget.text}</pre></p>
            {
                widget.list === 'OL' &&
                    <ol>
                        {
                            widget.text.split('\n').map((line, index) =>
                                <li>{line}</li>
                            )
                        }
                    </ol>
            }
            {
                widget.list === 'UL' &&
                    <ul></ul>
            }
        </div>

    </div>

export default CourseEditorListWidgetComponent