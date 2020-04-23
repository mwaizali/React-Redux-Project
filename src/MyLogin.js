import React,{useState} from 'react'
import {connect} from 'react-redux'
import {setAuthUser} from './actions/authUser'
import {useHistory} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';

function MyLogin(props){
    const [state,setState]=useState({
        loading:false,
        value:''
    })
    const history=useHistory()
    const onHandleChange=(event)=>{
        setState({...state,value:event.target.value})
    }
    const myHandleSubmit=async (event)=>{
        event.preventDefault()
        await props.dispatch(setAuthUser(state.value))
        console.log("login page");
        if(localStorage.getItem("check") == "0"){
            if(localStorage.getItem("check1") == 0)
            {
                localStorage.setItem("check","1")
                localStorage.setItem("check1",1)
            
            }
        }
            
            if(localStorage.getItem("check") === "0"){
                localStorage.setItem("check","1")
                history.push('/');
            }
            else{
                history.push()
            }
    }
    const {users} = props
    const disabled = state.value===''?true:false
    return(
        <div className = " center card indigo lighten-3">
            <div className=" ">
                <form onSubmit={myHandleSubmit}>
                    
                    <h3>
                        Would You Rather
                    </h3>    
                        <TextField
                        id="standard-select-currency-native"
                        select
                        label="Users"
                        value={state.value}
                        onChange={(event)=>onHandleChange(event)}
                        SelectProps={{
                            native: true,
                        }}
                        >
                            <option value="">
                                
                            </option>
                        {users.map(user=>
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                            )}
                        </TextField>
                        
                        <br/>          
                        <br/>          
                        
                        <button className="waves-effect waves-light btn  indigo darken-1 " type="submit" disabled={disabled}>login</button>                
                </form>
            </div>
        </div>
    )
    
}

function mapStateToProps({users}){
    return {
        users:Object.values(users)
    }
}
export default connect(mapStateToProps)(MyLogin)
