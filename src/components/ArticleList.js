import React from 'react'
import Article from "./Article";

export default function ArticleList({simpleArray}){
    const articleElements = simpleArray.map(element=>
        <li> <Article article = {element}/></li>);
    return (
        <ul>
            {articleElements}
        </ul>
    )
}