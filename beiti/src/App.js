import './App.css';
import { Route, Redirect } from 'react-router-dom'
import axios from 'axios'
import { useState , useEffect, useContext } from 'react'

import Navbar from './compenents/Navbar'
import Search from './compenents/Search'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';


function App() {


  const [user, setUser] = useState(({}))


  return (
    <div className="App">
      <Navbar />

      <Route
        exact path ="/"
        render={() =>
           <Welcome/>
        }
      />



      <Route
        path="/signup"
        render={()=>
          <Signup setUser={setUser}/>
        }
      />

      <Route
        path="/login"
        render={()=>
          <Login setUser={setUser} />
        }
      />

      <Route
        path ="/home"
        render={() =>
           <Home />
        }
      />

      <Route
        path="/dashboard"
        render={()=>
          <Dashboard/>

        }
      />

      <Route
        path="/dashboard"
        render={()=>
          <Search/>

        }
      />






    </div>
  );
}

export default App;
