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
            <div>
                <h2>
                    {article.title}
                    <button onClick={this.handleClick}> close </button>
                </h2>
                {body}
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