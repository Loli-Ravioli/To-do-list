import React from "react";
import PostListItem from "../post-list-item"
import {ListGroup} from "reactstrap";
import "./post-list.css";

//Список элементов
const PostList = ({posts, onDelete, completed}) => {

    const elements = posts.map((el) => {
        const {id, ...elProps} = el;
        return (
            //разворот каждого элемента el тк ключ и свйоство совпадают
            <li key={id} className="list-group-item">
                <PostListItem {...elProps}
                onDelete={() => onDelete(id)}
                 completed={() => completed(id)}
                />
            </li>
        )
    });

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
};

export default PostList;