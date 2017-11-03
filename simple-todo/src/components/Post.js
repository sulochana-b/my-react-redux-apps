import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addInput} from '../actions/index';
class Post extends Component{
    constructor(){
        super();
        this.state = {text:""}
    }
    inputChange(e){
        this.setState({text:e.target.value})
    }
    handleClick(){
        this.props.addInput(this.state.text)
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <input type="text" name="name" onChange={this.inputChange.bind(this)}/>
                <button onClick={this.handleClick.bind(this)}>ADD</button>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        input : state.input
    }
}

function matchDispatchToProps(dispatch){
 return bindActionCreators({addInput:addInput},dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(Post);