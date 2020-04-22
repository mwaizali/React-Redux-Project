import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
const MyVoTe=()=>{
    return(
        
            <p style={{backgroundColor:'blue'}}>You Voted</p>
        
    )
}

class Result extends React.Component{
    handleClick=()=>{
        this.props.history.push('/')
    }
    render(){
        const {question,user} = this.props
        const optOneV = question.optionOne.votes.length;
        const optTwoV = question.optionTwo.votes.length;
        const totalV = optOneV + optTwoV;
        const userV = user.answers[question.id];
        return(
            <div className = "container">
                <div className =  "center">
                        <h3>Results</h3>
                        <h4>Would you rather</h4>
                        .............................................................................
                        {userV==='optionOne'&&<MyVoTe/>}
                        <p>{question.optionOne.text}
                        <br/>
                        {((optOneV/totalV)*100).toFixed(2)}%
                        <br/>
                        {optOneV} out of {totalV} votes</p>
                        .............................................................................
                        {userV==='optionTwo'&&<MyVoTe/>}
                        <p>{question.optionTwo.text}
                        <br/>
                        {((optTwoV/totalV)*100).toFixed(2)}%
                        <br/>
                        {optTwoV} out of {totalV} votes</p>
                        .............................................................................
                    </div>
            </div>
        )
    }
} 
function mapStateToProps({users,authUser}){
    const user = users[authUser]
    return {
        user
    }
}
export default withRouter(connect(mapStateToProps)(Result))