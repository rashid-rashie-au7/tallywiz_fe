import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './components/News/HomePage';
import NewestHome from './components/Newest/NewestHome';
import AskPage from './components/AskPage/AskPage';
import JobsPage from './components/JobsPage/JobsPage';
import ShowPage from './components/ShowPage/ShowPage';
import CommentPage from './components/Comments/CommentPage';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar />
      <Route path="/" exact component ={HomePage} /> 
      <Route path="/newest" exact component ={NewestHome} />
      <Route path="/ask" exact component ={AskPage} />
      <Route path="/jobs" exact component ={JobsPage} />
      <Route path="/show" exact component={ShowPage} />
      <Route path="/comments" exact component={CommentPage} />
      <Route path="/login" exact component={LoginForm} />

      </BrowserRouter>
    </div>
  );
}

export default App;
