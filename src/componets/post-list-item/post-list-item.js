import React, {Component} from "react";
import "./post-list-item.css";

// сами элементы вместе с  их кнопками
export default class PostListItem extends Component {
    render() {
        const {content, onDelete, completed, isCompleted} = this.props
        let CheckClass = "bi bi-circle";
        if (isCompleted) {
            CheckClass = "bi bi-check2-circle";
        }
        return (
            <div className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">
                {content}
            </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={completed} type="button">
                        <i className={CheckClass}/>
                    </button>
                    <button type="button" className="btn-trash btn-sm"
                            onClick={onDelete}>
                        <i className="bi bi-trash"/>
                    </button>
                </div>
            </div>
        )
    }
}

