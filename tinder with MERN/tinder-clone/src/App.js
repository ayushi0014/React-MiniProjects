import './App.css';
import Header from './Components/Header';
import SwipeButtons from './Components/SwipeButtons.js';
import TinderCards from './Components/TinderCards';

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
