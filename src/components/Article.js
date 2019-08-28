import React, {Component} from 'react'
class Article extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen : false
        };
    }
    render (){
        const {article} = this.props;
        console.log(this.props);
        const body = this.state.isOpen && <section> {article.text}</section>;
        return(
            <div className="card">
                <div className="card-header">
                <h2>
                    {article.title}
                    <button onClick={this.handleClick}> close </button>
                </h2>
                </div>
                <div className = "card-body">
                {body}
                </div>
            </div>
        )
    }
    handleClick =  ()=>{
        console.log("clicked");
        this.setState({
            isOpen : !this.state.isOpen
        })


    }
}



export default Article