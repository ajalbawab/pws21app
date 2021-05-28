// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import { Router as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Team from './pages/team';
import Contact from './pages/contact';
import ErrorPage from './pages/errorpage';
import AppBackground from './components/AppBackground';
import Member from './pages/member';
import history from './myCreatedHistory';



function App() {
  return (
    <AppBackground>
    
    <Router history={history}>
    <Navbar/>

    <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/error' component={ErrorPage} />
    <Route path='/about' component={About} />
    <Route path='/team' component={Team} />
    <Route path='/contact' component={Contact} />
    <Route path={["/member/:q?"]}  component={Member} />
    {/* <Redirect from='*' to='/error' /> */}
    </Switch>
    </Router>
     </AppBackground>
  );
}
  
export default App;