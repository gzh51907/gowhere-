import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import userActions from '../store/action/user';

const mapStateToProps = (state) => {
    return {
        userInf: state.userReducer.userInf
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(userActions, dispatch)
}
@connect(mapStateToProps, mapDispatchToProps)
class Vacation extends Component{
    state={
        
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>Vacation</h1>
                {this.props.userInf.username}
            </div>
        )
    }
}

export default Vacation