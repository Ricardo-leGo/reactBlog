import React, { FC  } from "react";
import { Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './Pages/Home';

const Routes: FC = () => {


  
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      </>
  )
}
;
export default Routes;
