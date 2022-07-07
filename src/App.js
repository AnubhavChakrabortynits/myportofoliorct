import Navbar from './components/Navbar';
import './App.css';
import Header from './components/Header';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Skills from './components/Skills';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import About from './components/About';

import Icons from './components/Icons';
import Contact from './components/Contact';

import Projects from './components/Projects';





function App() {


  return (
    
    <Router>
  <div className='maindiv'>
           <Navbar/>
           <Switch>
           <Route exact path="/">
           <Header/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
           <Icons/>
        
</Route>
<Route exact path="/skills">
<Skills/>
</Route>


<Route exact path="/about">
  <About/>
</Route>

          

          <Route exact path="/contact">
            <Contact/>
          </Route>  
             
<Route exact path="/projects">
  <Projects/>
</Route>

           </Switch>

    
           </div>
          
          </Router>
    
  );
}

export default App;
