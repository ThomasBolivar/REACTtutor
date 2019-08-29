import React, {Component} from 'react'
import "../components/static/css/styles.css"
class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,

        };


    }
    componentWillMount() {
        console.log("componentWillMount called");
    }

    render() {
        console.log("Rendering component Article");
        const {article} = this.props;
        console.log(this.props);
        const body = this.state.isOpen && <section> {article.text}</section>;
        return (

            <div className="card mx-auto" style = {{ width : "70%"}}>
                <div className="card-header">
                    <h2>
                        {article.title}
                        <button onClick={this.handleClick} className="btn btn-warning float-right">
                            {this.state.isOpen ? "close" : "open"}
                        </button>

                    </h2>
                </div>
                <div className="niceCoverage">
                    {body}
                </div>
            </div>
        )
    }
    componentDidMount() {
        console.log("componentDidMount called"," I'm inside real DOM");
    }


    handleClick = () => {
        console.log("clicked");
        this.setState({
            isOpen: !this.state.isOpen
        })


    }
}


export default Article