import React from 'react';
import {handleInitialData} from './actions/shared'
import {connect} from 'react-redux'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import MyLogin from './MyLogin'
import MyNav from './MyNav'
import MyHome from './MyHome'
import MyLeaderboard from './MyLeaderboard'
import MyBadPage from './MyBadPage'
import MyNewPoll from './MyNewPoll'
import MyUserCard from './UserCard';


class App extends React.Component {
  
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    const {authUser} = this.props
    return (
      <BrowserRouter>
      <div className="App">
        {authUser==null?
        <Route render={()=>(<MyLogin/>)}/>:
        <div>
          <MyNav/>
          <Switch>
          <Route exact path="/" component={MyHome} />
          <Route path="/questions/bad_id" component={MyBadPage}/>
          <Route path="/questions/:question_id" component={MyUserCard}/>
          <Route path="/add" component={MyNewPoll}/>
          <Route path="/leaderboard" component={MyLeaderboard}/>
          <Route component={MyBadPage}/>
          </Switch>
        </div>
        }
      </div>
      </BrowserRouter>
  );
}
}

function mapStateToProps({authUser})
{

  return {
    authUser
  }
}

export default connect(mapStateToProps)(App);
