import React,{Component} from 'react';
import {connect} from 'react-redux';
import {deleteInput} from '../actions/index';
import {bindActionCreators} from 'redux';
class Board extends Component{
    closeHandler(id){
        console.log("deleted",id);
        this.props.deleteInput(id)
    }
    renderList() {
        return this.props.text.map((input) => {
            return (
                <div key={input.id} className="container">
                <div>
                    {input.text}
                </div>
                <button onClick={this.closeHandler.bind(this,input.id)}>close</button>
                </div>
            );
        });
    }
    render(){
        console.log(this.props.text);
        if (!this.props.text) {
            return (<div>Select a user...</div>);
        }
        return(
            <div>
                {this.renderList()}
            </div>
        )
    }
}
function mapStateToProps(state){
  return{
      text:state.activeUser
  }
}
function dispatchToProps(dispatch){
    return bindActionCreators({deleteInput:deleteInput},dispatch)
}
export default connect(mapStateToProps,dispatchToProps)(Board);


