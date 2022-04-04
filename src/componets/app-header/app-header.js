import React from "react";

let liked = undefined ?? 0;
const AppHeader = () => {
    return(
        <div className="app-header d-flex">
            <h1>Блог from India</h1>
            <h2>Успешных собесов {liked}</h2>
        </div>
    )
}

export default AppHeader;