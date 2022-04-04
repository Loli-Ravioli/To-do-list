import React from "react";

const PostAddForm=()=>{
    return(
        <form className="bottom-panel d-flex">
            <input type="text"
                   placeholder="Чо думаешь по этому поводу?"
                   className="form-control new-post-label"
            />
            <button type="submit" className="btn btn-outline-secondary">
                Высрать
            </button>
        </form>
    )
}
export default PostAddForm;