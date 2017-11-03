import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {switchButton} from '../actions/index';
class Bulb extends Component{
    constructor(){
        super();
        this.state = {active:false};
    }
    handleChange(){
        this.setState({ active: !this.state.active }, () => {
            console.log(this.state.active, 'state updated');
            this.props.switchButton(this.state.active);
          }); 
    }
   
    render(){
        console.log("newData",this.props.newData);
        return(
            <div>
                <img src={this.props.newData[0].image} alt="pic_bulb" />
                <button onClick={this.handleChange.bind(this)}>{this.props.newData[0].text}</button>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        newData:state.newData
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({switchButton:switchButton},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Bulb);
