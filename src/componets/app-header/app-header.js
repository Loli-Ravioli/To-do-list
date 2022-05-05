import React from "react";
import "./app-header.css"

//Шапка с заголовком и колличеством постов(готовых и не готовых)
const AppHeader = ({completed, allPost}) => {
    return (
        <div className='app-header d-flex'>
            <h1>My todo list</h1>
            <h2>{completed} готовых из {allPost}</h2>
        </div>
    )
}

export default AppHeader;