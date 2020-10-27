import {
    CREATE_WIDGET,
    READ_WIDGETS_FOR_TOPIC,
    READ_WIDGET,
    UPDATE_WIDGET,
    DELETE_WIDGET,
    UPDATE_WIDGETS_FOR_TOPIC,
    ADVANCE_WIDGET,
    PREVIEW_WIDGETS
} from "../actions/courseWidgetActions"

const initialState = {
    widgets: [
        {id: 'Local1', title: 'LocalStaticWidgetOne', type: 'HEADING', widgetOrder: 1},
        {id: 'Local2', title: 'LocalStaticWidgetTwo', type: 'PARAGRAPH', widgetOrder: 1}
    ],
    topicId: "",
    preview: false
}

const widgetReducer = (state = initialState, action = action) => {
    switch (action.type) {
        case CREATE_WIDGET:
            return {
                ...state,
                widgets: [...state.widgets,
                    action.widget
                ]
            }
        case READ_WIDGETS_FOR_TOPIC:
            console.log("Read widgets for topic REDUCER")
            console.log(action.widgets)
            return {
                ...state,
                widgets: action.widgets,
                topicId: action.topicId
            }
        case READ_WIDGET:
            return {
                ...state,
                topic: action.topic
            }
        case UPDATE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.map(
                    // widget => widget._id === action.widget._id ? action.widget : widget
                    widget => widget.id === action.widget.id ? action.widget : widget
                )
            }
        case UPDATE_WIDGETS_FOR_TOPIC:
            return {
                ...state,
                widgets: action.widgets
            }
        case DELETE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.filter(widget => widget !== action.widget)
            }
        case PREVIEW_WIDGETS:
            return {
                ...state,
                preview: action.preview
            }
        case ADVANCE_WIDGET:
            let moveWidget = action.widget
            console.log("Moving widget at spot " + moveWidget.widgetOrder)
            console.log(state.widgets)
            let x = moveWidget.widgetOrder
            let precedeWidget = {}
            // let widget = {}
            for (let w in state.widgets) {
                let widget = state.widgets[w]
                console.log(widget)
                // console.log(widget.id)
                // if (widget.id !== moveWidget.id) {
                //     console.log("Widget " + widget.title + " is in position " + widget.widgetOrder)
                // }
                if (widget.id !== moveWidget.id && widget.widgetOrder === (moveWidget.widgetOrder - 1)) {
                    console.log("Widget " + widget.title + " is in position " + widget.widgetOrder)
                    precedeWidget = widget
                }
            }
            console.log("Found widget at spot " + precedeWidget.widgetOrder)
            moveWidget.widgetOrder = --moveWidget.widgetOrder
            console.log("Primary moved up to spot " + moveWidget.widgetOrder)
            precedeWidget.widgetOrder = ++precedeWidget.widgetOrder
            console.log("Secondary moved down to spot " + precedeWidget.widgetOrder)
            console.log(state.widgets)
            return {
                ...state,
                widgets: state.widgets.map(
                    widget =>
                    {
                        if (widget.id === moveWidget.id) {
                            console.log("Replacing")
                            console.log(widget)
                            console.log("... with move widget...")
                            console.log(moveWidget)
                            return moveWidget
                        } else if (widget.id === precedeWidget.id) {
                            console.log("Replacing")
                            console.log(widget)
                            console.log("... with precede widget...")
                            console.log(precedeWidget)
                            return precedeWidget
                        }
                    }
                )
            }
            // let rtn = {
            //     ...state,
            //     widgets: state.widgets.map(
            //         widget =>
            //             widget.id === moveWidget.id ?
            //                 moveWidget : widget
            //             || widget.id === precedeWidget.id ?
            //                 precedeWidget : widget
            //     )
            // }
            // console.log(state.widgets)
            // return rtn


        default:
            return state;
    }
}

export default widgetReducer;