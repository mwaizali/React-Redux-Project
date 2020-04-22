import React from 'react'
import {connect} from 'react-redux'
import Teaser from './PollTeaser'
import Question from './MyQuestion'
import Result from './MyResult'
import MyBadPage from './MyBadPage'
import {Redirect} from 'react-router-dom'
import {Avatar} from '@material-ui/core';

const Content=(props)=>{
    const {pollType,question,unanswered} = props

    switch(pollType){
        case 'POLL_TEASER':
            return <Teaser question={question} unanswered={unanswered}/>
        case 'POLL_QUESTION':
            return <Question question={question}/>
        case 'POLL_RESULT':
            return <Result question={question}/>
        default:
            return <MyBadPage /> 
    }
}


class UserCard extends React.Component{

    render(){
        const {author,question,pollType,unanswered=null,badPath} = this.props
        if(badPath===true){
            return <Redirect to="/questions/bad_id" />
        }
        return(
            <div className = "">
                      <div class="card ">
                            <div class="card-image">
                                    <Avatar alt="image" src={author.avatarURL[author.id]}/>
                                    <h4 className= "center">{author.name}</h4> 

                                    <Content pollType={pollType} question={question} unanswered={unanswered}/>                           
                            </div>
                        </div>
                  </div>
        
        )
    }
}
function mapStateToProps({users,questions,authUser},{match,question_id}){
    let pollType,question,author,badPath=false
    
    if(question_id!==undefined){
        question = questions[question_id]
        pollType='POLL_TEASER' 
        author=users[question.author]
    }else{
        const {question_id} = match.params
        question = questions[question_id]
        const user = users[authUser]

        if(question===undefined){
            badPath=true
        }else{
            author=users[question.author]
            pollType='POLL_QUESTION'
            if(Object.keys(user.answers).includes(question.id)){
                pollType='POLL_RESULT'
            }
        }
    }
    return {
        badPath,
        question,
        author,
        pollType
    }
}
export default connect(mapStateToProps)(UserCard)
