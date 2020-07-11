import React from 'react';
import {
  Switch , Route ,Link,useRouteMatch
} from 'react-router-dom';

export default function Home(){

    let match = useRouteMatch();
    console.log(match);
    return(
        <div className="App">
      <header className="App-header">
        Ini halaman Users
       </header>

       <div className="App">
      <header className="App-header">
        <ul>
          <li><Link to={`${match.url}/user`}>Users</Link></li>
        </ul>
      </header>

      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
      </Switch>
      </div>
    </div>
    )
    }