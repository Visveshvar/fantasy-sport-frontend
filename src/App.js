
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import User from './components/UserPage';
import Homecontent from './components/HomeContent.jsx'
import { useAuth } from './components/AuthContext.js';
import './CSS/Page1.css'
import Feedcontent from './components/FeedContent.jsx';
import League from './components/Leagues.jsx';
import PlayerDetail from './components/PlayerDetails.jsx'
import PremierLeague from './components/PremierLeague.jsx'
import LaLiga from './components/LaLiga.jsx'
import SerieA from './components/SerieA.jsx'
import Bundesliga from './components/Bundesliga.jsx'
import Ligue1 from './components/Ligue1.jsx'
import Fantasy from './components/Fantasy.jsx';
import { FantasyProvider } from './components/FantasyContext'; 
import UserTeam from './components/UserTeams.jsx';
import Profile from './components/Profile.jsx';
function App() {
  const {isAuthenticated}=useAuth()
  return (
    <div className="App">
      <FantasyProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/login' element={<LogIn/>}></Route>
          <Route path='/' element={<User/>}></Route>
          <Route path='/home' element={isAuthenticated ? <Homecontent /> : <Navigate to='/login' />} />
          {/* <Route path='/home' element={<Homecontent/>}></Route>
          <Route path='feed' element={<Feedcontent/>}></Route> */}
          <Route path='/league' element={isAuthenticated?<League/>:<Navigate to='/login' />}></Route>
          <Route path='/premierleague' element={isAuthenticated?<PremierLeague/>:<Navigate to='/login' />}></Route>
          <Route path='/team/:leagueName/:teamName' element={isAuthenticated?<PlayerDetail/>:<Navigate to='/login' />}></Route>
          <Route path='/laliga' element={isAuthenticated?<LaLiga/>:<Navigate to='/login' />}></Route>
          <Route path='/serieA' element={isAuthenticated?<SerieA/>:<Navigate to='/login' />}></Route>  
          <Route path='/bundesliga' element={isAuthenticated?<Bundesliga/>:<Navigate to='/login' />}></Route>
          <Route path='/ligue1' element={isAuthenticated?<Ligue1/>:<Navigate to='/login' />}></Route>
          <Route path='/fantasy' element={isAuthenticated?<Fantasy/>:<Navigate to='/login' />}></Route>
          <Route path='/userteam' element={isAuthenticated?<UserTeam/>:<Navigate to='/login' />}></Route>
          <Route path='/profile' element={isAuthenticated?<Profile/>:<Navigate to='/login'/>}></Route>
        </Routes>
      </BrowserRouter>
      </FantasyProvider>
    </div>
  );
}

export default App;
