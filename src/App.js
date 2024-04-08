
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import retriangle1 from './assets/Rectangle 12.svg'
import retriangle2 from './assets/Rectangle 13.svg'
import corner_shape from './assets/Group 9.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import Footer from './components/Footer/Footer';
import Games from './components/Games/Games';
import About from './components/About/About';
import Career from './components/Career/Career';
import Support from './components/Support/Support';
import GameOne from './components/Games/GameOne';
import GameTwo from './components/Games/GameTwo';
import GamesThree from './components/Games/GamesThree';
function App() {
return (
<Router>

<div className="App">
<Navbar></Navbar>
  <img src={retriangle1} className='up-ret' alt="" />
  <img src={retriangle2} className='down-ret' alt="" />
  <Routes>
  <Route exact path='/' element={<Home />} />
  <Route  path='/Games' element={<Games />} />
  <Route  path='/About' element={<About></About>} />
  <Route  path='/Career' element={<Career></Career>} />
  <Route  path='/Support' element={<Support></Support>} />
  <Route  path='/Games/GameOne' element={<GameOne></GameOne>} />
  <Route  path='/Games/GameTwo' element={<GameTwo></GameTwo>} />
  <Route  path='/Games/GameThree' element={<GamesThree></GamesThree>} />

  </Routes>
<img src={corner_shape} className='corner' alt="" />
<Footer></Footer>
</div> 
</Router>
);
}


export default App;