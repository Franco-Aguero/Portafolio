import './App.css';
import { Route } from 'react-router-dom';
import NavBarMobile from './Components/NavBar/navBarMobile';

function App() {
  return (
    <div className="App">
      <Route path='/' component={NavBarMobile}/>
    </div>
  );
}

export default App;
