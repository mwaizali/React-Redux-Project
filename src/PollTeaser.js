import React from 'react'
import {Redirect} from 'react-router-dom'

class PollTeaser extends React.Component{
    state={
        viewPoll:false
    }
    onHandleClick=()=>{
        this.setState((prevState)=>({viewPoll:!prevState.viewPoll}))
    }
    render(){
        const {question,unanswered} = this.props
        console.log('question',question)
        const btnText = unanswered===true?'Answer Poll':'Result'
        if(this.state.viewPoll===true){
            return <Redirect push to={`/questions/${question.id}`}/>
        }
        return(
            <div >
                
                <div className="card-content">
                    <h5>Would you rather</h5>
                    <p>{question.optionOne.text}</p>
                    <p>or</p>         
                </div>
                <div className="card-action center">
                    <button className="waves-effect waves-light btn indigo darken-1" onClick={this.onHandleClick}>{btnText}</button> 
                </div>
                
            
            </div>
        )
    }
}
export default PollTeaser