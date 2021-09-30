import Home from './Home'
import Landing from './components/landing/Landing';
import {BrowserRouter as Route} from 'react-router-dom'


function App() {


  return (
    <div>
      {/* <Landing/>
      <Route exact path='/' component={Home}/> */}
      <Home/>
    </div>
  );
}

export default App;
