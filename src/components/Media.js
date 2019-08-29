import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import "../components/static/css/styles.css"
import picture from '../components/static/images/React.js_logo-512.png'


class Media extends Component {
    /** To work with component, if you need to set state and bind functions you have to write constructor and call super(props) inside */
    constructor(props) {
        super(props);
        this.state = {
            isTransparent: true
        };
        this.changer = ["imageChangingTrue", "imageChangingFalse"]
    }

    /**
     * render processing visual representation of your DOM, you can return html (ish) code to your DOM, it is called JSX
     * Whenever render initiated code inside return will be translated to javascript code, and it's gonna look like this:
     *
     React.createElement("div", {
  className: "container"
}, React.createElement("img", {
  onClick: (void 0).handleClick,
  className: "rounded mx-auto d-block ".concat((void 0).state.isTransparent ? (void 0).changer[0] : (void 0).changer[1]),
  src: picture,
  alt: "fireSpot"
}));

     *
     *
     */
    render() {
        return (
            <div className="container">
                <img onClick={this.handleClick}
                     className={`rounded mx-auto d-block ${this.state.isTransparent ? this.changer[0] : this.changer[1]}`}
                     src={picture}
                     alt="fireSpot"/>

            </div>

        )
    }

    /**
     * After component arrives to real DOM you can call componentDidMount to do some things with a visual part
     */
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isTransparent: false
            })
        }, 1000)
    }

    handleClick = () => {
        console.log("clicked");
        this.setState({
            isTransparent: !this.state.isTransparent

        })


    }

}

export default Media