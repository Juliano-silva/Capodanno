import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Contéudo from './Components/Contéudo'
import Home from './Components/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Adicionar from './Components/Adicionar'
import Portfolio from './Components/Portfolio'
export default function App(){
  return(
    <Router>
      <Header/>
      <div id='Corpo'>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/Adicionar"><Adicionar/></Route>
        <Route exact path="/Contéudo"><Contéudo/></Route>
        <Route exact path="/Portfolio"><Portfolio/></Route>
      </Switch>
      </div>
      <Footer/>
    </Router>
  )
}

