import './App.css';
import Header from './Components/Header';
import SwipeButtons from './Components/feedPage/SwipeButtons';
import TinderCards from './Components/feedPage/TinderCards';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './Components/chatPage/Profile';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Switch>
          <Route path='/chats'> 
            <Header backButton='/' />
            I'm chat page
          </Route>
          <Route path="/profile"> 
            <Header/>
            I'm profile Page
            <Profile />
          </Route>
          <Route path='/'>
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
          
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
