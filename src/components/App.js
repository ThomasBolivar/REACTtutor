import React, {Component} from 'react'
import ArticleList from './ArticleList'
import {simpleArray} from '../propExample'
import 'bootstrap/dist/css/bootstrap.css'
import "../components/static/css/styles.css"
import Media from "./Media";

class App extends Component {

    render() {
        console.log(this);
        console.log("Rendering Component App");
        return (
            <div className="container mx-auto">
                <div className="jumbotron">
                    <h1 className="display-4"> Application with React</h1>
                </div>
                <div>
                    <Media/>
                </div>
                <div>
                    <ArticleList simpleArray={simpleArray}/>
                </div>
            </div>

        )
    }

}

export default App