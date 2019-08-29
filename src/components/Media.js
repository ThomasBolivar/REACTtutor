import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import "../components/static/css/styles.css"
import picture from '../components/static/images/React.js_logo-512.png'
class Media extends Component {

    constructor(props){
        super(props);
        this.state ={
            isTransparent: true
        }
    }

    render() {

        return (
                <div className="container">
                    <img onClick={this.handleClick}
                         className={`rounded mx-auto d-block ${this.state.isTransparent ? "imageChangingTrue": "imageChangingFalse"}`}
                         src={picture}
                         alt="fireSpot"
                    />



                </div>

        )
    }
    handleClick = () => {
        console.log("clicked");
        this.setState({
            isTransparent: !this.state.isTransparent

        })


    }

}
export default Media