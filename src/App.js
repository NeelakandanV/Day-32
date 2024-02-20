import { Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComp from './Components/Login';
import BaseApp from './Components/BaseApp';
import HomeComp from './Components/Dashboard';
import NoPageComp from './Components/NoPage';
import UserReadComp from './Components/User_Read';
import UserCreateComp from './Components/User_Create';
import UserEditComp from './Components/User_Edit';
import UserViewComp from './Components/User_View';
import BookReadComp from './Components/Book_Read';
import BookCreateComp from './Components/Book_Create';
import BookEditComp from './Components/Book_Edit';
import BookViewComp from './Components/Book_View';


function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/">
          <LoginComp/>
        </Route>
  
        <Route path="/Home">
          <HomeComp/>
        </Route>

        <Route path="/Users">
          <UserReadComp/>
        </Route>

        <Route path="/Create-User">
          <UserCreateComp/>
        </Route>

        <Route path="/Edit-User/:id">
          <UserEditComp/>
        </Route>

        <Route path="/View-User/:id">
          <UserViewComp/>
        </Route>

        <Route path="/Books">
          <BookReadComp/>
        </Route>

        <Route path="/Create-Book">
          <BookCreateComp/>
        </Route>

        <Route path="/Edit-Book/:id">
          <BookEditComp/>
        </Route>

        <Route path="/View-Book/:id">
          <BookViewComp/>
        </Route>

        <Route path="**">
          <NoPageComp/>
        </Route>

      </Switch>
      
    </div>
  );
}

export default App;
