import React from "react";
import GlobalProvider from "./utils/GlobalContext";
import Homepage from "./pages/Homepage";
import AddTodo from "./pages/AddTodo"; 
import ViewTodos from "./pages/ViewTodos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";

function App() {
  return (
  
    <Router>
      <GlobalProvider>
      <Navbar/>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/todos" component={ViewTodos} />
          <Route exact path="/todos/new" component={AddTodo} />
        </Switch>

      </div>
      </GlobalProvider>
    </Router>
  );
}




export default App;
