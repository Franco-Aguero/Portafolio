import './App.css';
import { Route } from 'react-router-dom';
import NavBarMobile from './Components/NavBar/navBarMobile';
import AboutMe from './Components/AboutMe';

import Start from './Components/Start';
import Skills from './Components/Skills';
function App() {
  return (
    <div className="App">
      <Route path='/' component={NavBarMobile}/>
      <Route path='/' component={Start}/>
      <Route path='/' component={AboutMe}/>
      <Route path='/' component={Skills}/>
      
    </div>
  );
}

export default App;
