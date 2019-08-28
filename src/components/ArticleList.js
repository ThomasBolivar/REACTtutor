import React from 'react'
import Article from "./Article";
import "bootstrap/dist/css/bootstrap.css"

export default function ArticleList({simpleArray}){
    const articleElements = simpleArray.map((element, index)=>
        <li className="list-group-item" key = {element.title}> <Article article = {element}/></li>);
    return (
        <ul className="list-group-item list-group-item-action">
            {articleElements}
        </ul>
    )
}