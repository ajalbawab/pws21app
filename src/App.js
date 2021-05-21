// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Team from './pages/team';
import Contact from './pages/contact';
import AppBackground from './components/AppBackground';
  



function App() {
  return (
    <AppBackground>
    
    <div>
    <Router>
    <Navbar />
    <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/about' component={About} />
    <Route path='/team' component={Team} />
    <Route path='/contact' component={Contact} />
    </Switch>
    </Router>
    </div>
    </AppBackground>
  );
}
  
export default App;