import React from "react";

import AppHeader from '../app-header';
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css'

const App = () => {

    const data = [
        {label:'About to learn React', important: true, id: 'qwqw'},
        {label:'Feeling great', important: false, id: 'weasd'},
        {label:'Give me some time', important: false, id: 'fasfas'}
    ];

    return (
        <div className="app">
        <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div> 
            <PostList posts={data} />
            <PostAddForm/>
        </div>
    )
}

export default App;