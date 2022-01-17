import { Route } from 'react-router-dom';
import NavBarMobile from './Components/NavBar/navBarMobile';
import AboutMe from './Components/AboutMe/index';
import Start from './Components/Start/index';
import Skills from './Components/Skills/index';
import Project from './Components/Project/index';
import Education from './Components/Education/index';
import Contact from './Components/Contact/index';
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