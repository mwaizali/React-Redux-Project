import React from 'react'
import {connect} from 'react-redux'
import {handleSaveQuestionAnswer} from './actions/users'

class MyQuestion extends React.Component{

    state={
        value:''
    }
    onHandleChange=(e)=>this.setState({value:e.target.value})
    onHandleSubmit=(e)=>{
        e.preventDefault()
        const {value} = this.state
        if(this.state.value !== ''){
            const {authUser,question} = this.props
            this.props.dispatch(handleSaveQuestionAnswer(authUser,question.id,value)) 
        }
    }
    render(){
        const {value} = this.state
        const {question} = this.props
        console.log('question',question)
        // const disabled = value===''?true:false
        return(
            <div>
                <form className = "container " onSubmit={this.onHandleSubmit}>
                    <p>
                        <label>
                        <input 
                            name="group1" 
                            type="radio" 
                            value='optionOne'
                            checked={value==='optionOne'}
                            onChange={this.onHandleChange}
                        />
                        <span>{question.optionOne.text}</span>
                        </label>
                    </p>
                    <p>
                        <label>
                        <input 
                            name="group1" 
                            type="radio" 
                            checked={value==='optionTwo'}
                            onChange={this.onHandleChange}
                        />
                            <span>{question.optionTwo.text}</span>
                        </label>
                    </p>
                    <button className="waves-effect waves-light btn indigo darken-1" type="submit">submit</button>
                </form>

            </div>
        )
    }
}
function mapStateToProps({authUser}){
return {
    authUser
}
}
export default connect(mapStateToProps)(MyQuestion)