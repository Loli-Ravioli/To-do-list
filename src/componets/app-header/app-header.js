import React from "react";
import "./app-header.css"



const AppHeader = ({completed,allPost}) => {
    return(
        <div className='app-header d-flex'>
            <h1>To do</h1>
            <h2>{completed} готовых из {allPost}</h2>
        </div>
    )
}

export default AppHeader;