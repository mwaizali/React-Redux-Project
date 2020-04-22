import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {setAuthUser} from './actions/authUser'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Avatar} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const MyNav =(props)=>{
    
    const classes = useStyles()
    const onHandleClick=(e)=>{
        e.preventDefault()
        props.dispatch(setAuthUser(null))
    }
        return(
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Would You Rather
                        </Typography>
                        
                        <Avatar src={props.users[props.authUser].avatarURL[props.users[props.authUser].id]}/>
                        <Typography>
                            {props.users[props.authUser].name}      
                        </Typography>
                    </Toolbar>
                </AppBar>
            <nav className ="blue darken-2">
                <div class="nav-wrapper ">
                    <div class="brand-logo right"> 
                        <Button classname="waves-effect waves-light btn white-text"  onClick={(e)=>onHandleClick(e)}>Logout</Button>
                    </div>
                    <ul class="left hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/add">New Poll</Link></li>
                        <li><Link to="/leaderboard">LeaderBoard</Link></li>
                    </ul>
                </div>
            </nav>         
            </div>
        )
}

function mapStateToProps({users,authUser}){
    return {
        users,
        authUser
    }
}
export default connect(mapStateToProps)(MyNav)