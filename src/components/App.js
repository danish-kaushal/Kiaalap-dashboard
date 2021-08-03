import React from "react";
import { Redirect, Route, Switch} from "react-router";
import Leftside from './Leftside';
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import Footer from "./Footer";
import Home from "./Home";

 const App = () => {
  return (
    <>
    <Leftside />
    <Navbar />
    
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/Login"><Login /></Route>
      <Route exact path="/Register"><Register /></Route>
      <Redirect to ="/" />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
