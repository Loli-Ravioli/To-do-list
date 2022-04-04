import React from "react";

const PostListItem=()=>{
    return(
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">
                Тестовые не шлют на собесы не зовут
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button  type="button" className="btn-star btn-sm">
                    <i className="bi bi-star"/>
                </button>
                <button  type="button" className="btn-trash btn-sm">
                    <i className="bi bi-trash"/>
                </button>
                <i className="fa fa-heart"/>
            </div>
        </li>
    )
}
export default PostListItem;