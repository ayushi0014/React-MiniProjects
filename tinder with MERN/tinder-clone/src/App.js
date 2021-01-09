import './App.css';
import Header from './Components/Header';
import SwipeButtons from './Components/SwipeButtons.js';
import TinderCards from './Components/TinderCards';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Switch>
        <Route path='/chats'> 
        <Header backButton='/'/>
        I'm chat page
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
