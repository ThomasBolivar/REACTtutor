import React from 'react'

import ArticleList from './ArticleList'
import {simpleArray} from '../propExample'
function App (){
    return(
        <div>
            <h1> Application name</h1>
            <ArticleList simpleArray = {simpleArray}/>
        </div>

    )
}
export default App