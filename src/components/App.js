import React from 'react'

import ArticleList from './ArticleList'
import {simpleArray} from '../propExample'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4"> Application name</h1>
            </div>
            <ArticleList simpleArray={simpleArray}/>
        </div>

    )
}

export default App