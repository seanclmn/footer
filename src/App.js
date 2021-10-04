import Home from './Home'
import Landing from './components/landing/Landing';
import {BrowserRouter as Route} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react"

function App() {
  const { user, isAuthenticated } = useAuth0()
  const user_object = user
  return (
    <div>
      {isAuthenticated ?       
        <Home user_object={user_object}/>
        :
        <Landing/>
      }
      {/* <Home user_object={user_object}/> */}
    </div>
  );
}

export default App;
