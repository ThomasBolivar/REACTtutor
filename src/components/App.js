import React, {Component} from 'react'
import ArticleList from './ArticleList'
import {simpleArray} from '../propExample'
import 'bootstrap/dist/css/bootstrap.css'
import "../components/static/css/styles.css"
import Media from "./Media";
import Counter from "./Counter";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
    }

    render() {
        console.log(this);
        console.log("Rendering Component App");
        return (
            <div className="container mx-auto" style = {{ width : "70%"}}>
                <div className="header-area">
                    <h1 className="display-4"> Application with React {this.state.time.toLocaleTimeString()}</h1>

                </div>
                <div>
                    <Media/>

                </div>
                <div className="niceCoverage">
                    <Counter/>

                </div>
                <div>
                    <ArticleList simpleArray={simpleArray}/>
                </div>
            </div>

        )
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }
}

export default App