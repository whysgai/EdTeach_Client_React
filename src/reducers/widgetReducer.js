import {
    CREATE_WIDGET,
    READ_WIDGETS_FOR_TOPIC,
    READ_WIDGET,
    UPDATE_WIDGET,
    DELETE_WIDGET,
    UPDATE_WIDGETS_FOR_TOPIC,
    SORT_WIDGETS,
    ADVANCE_WIDGET,
    REGRESS_WIDGET,
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
        case SORT_WIDGETS:
            console.log("Sorting widgets...")
            return {
                ...state,
                widgets: state.widgets.sort(
                    (a, b) => a.widgetOrder - b.widgetOrder
                )
            }
        case ADVANCE_WIDGET:
            let moveWidgetUp = action.widget
            console.log("Moving widget at spot " + moveWidgetUp.widgetOrder)
            console.log(state.widgets)
            let precedeWidget = {}
            // let widget = {}
            for (let w in state.widgets) {
                let widget = state.widgets[w]
                console.log(widget)
                // console.log(widget.id)
                // if (widget.id !== moveWidget.id) {
                //     console.log("Widget " + widget.title + " is in position " + widget.widgetOrder)
                // }
                if (widget.id !== moveWidgetUp.id && widget.widgetOrder === (moveWidgetUp.widgetOrder - 1)) {
                    console.log("Widget " + widget.title + " is in position " + widget.widgetOrder)
                    precedeWidget = widget
                }
            }
            console.log("Found widget at spot " + precedeWidget.widgetOrder)
            moveWidgetUp.widgetOrder = --moveWidgetUp.widgetOrder
            console.log("Primary moved up to spot " + moveWidgetUp.widgetOrder)
            precedeWidget.widgetOrder = ++precedeWidget.widgetOrder
            console.log("Secondary moved down to spot " + precedeWidget.widgetOrder)
            console.log(state.widgets)
            return {
                ...state,
                widgets: state.widgets.map(
                    widget =>
                    {
                        if (widget.id === moveWidgetUp.id) {
                            console.log("Replacing")
                            console.log(widget)
                            console.log("... with move widget...")
                            console.log(moveWidgetUp)
                            return moveWidgetUp
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

        case REGRESS_WIDGET:
            let moveWidgetDown = action.widget
            console.log("Moving widget at spot " + moveWidgetDown.widgetOrder)
            console.log(state.widgets)
            let suceedWidget = {}
            // let widget = {}
            for (let w in state.widgets) {
                let widget = state.widgets[w]
                console.log(widget)
                // console.log(widget.id)
                // if (widget.id !== moveWidget.id) {
                //     console.log("Widget " + widget.title + " is in position " + widget.widgetOrder)
                // }
                if (widget.id !== moveWidgetDown.id && widget.widgetOrder === (moveWidgetDown.widgetOrder + 1)) {
                    console.log("Widget " + widget.title + " is in position " + widget.widgetOrder)
                    suceedWidget = widget
                }
            }
            console.log("Found widget at spot " + suceedWidget.widgetOrder)
            moveWidgetDown.widgetOrder = ++moveWidgetDown.widgetOrder
            console.log("Primary moved up to spot " + moveWidgetDown.widgetOrder)
            suceedWidget.widgetOrder = --suceedWidget.widgetOrder
            console.log("Secondary moved down to spot " + suceedWidget.widgetOrder)
            console.log(state.widgets)
            return {
                ...state,
                widgets: state.widgets.map(
                    widget =>
                    {
                        if (widget.id === moveWidgetDown.id) {
                            console.log("Replacing")
                            console.log(widget)
                            console.log("... with move widget...")
                            console.log(moveWidgetDown)
                            return moveWidgetDown
                        } else if (widget.id === suceedWidget.id) {
                            console.log("Replacing")
                            console.log(widget)
                            console.log("... with succeed widget...")
                            console.log(suceedWidget)
                            return suceedWidget
                        }
                    }
                )
            }
        default:
            return state;
    }
}

export default widgetReducer;