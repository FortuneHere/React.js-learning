import React from "react";

import PostListItem from '../post-list-item';

import './post-list.css'

const PostList = () => {
    return (
        <ul className="app-list list-group">
            <PostListItem label='About to learn React'/>
            <PostListItem label='Feeling great'/>
            <PostListItem label='Give me some time'/>
        </ul>
    )
}

export default PostList;