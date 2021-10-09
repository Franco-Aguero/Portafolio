import { Route } from 'react-router-dom';
import NavBarMobile from './Components/NavBar/navBarMobile';
import AboutMe from './Components/AboutMe';
import Start from './Components/Start';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Background from './Components/Bg/Background';

const App = () => {
  return (
    <div className="App">
      <Route path='/' component={NavBarMobile}/>
      <Route path='/' component={Background}/>
      <Route path='/' component={Start}/>
      <Route path='/' component={AboutMe}/>
      <Route path='/' component={Skills}/>
      <Route path='/' component={Project}/>
      <Route path='/' component={Education}/>
      <Route path='/' component={Contact}/>
    </div>
  );
}

export default App;