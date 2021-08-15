import React from 'react';
import NavBar from './components/NavBar/NavBar.js';
import { Meu } from './view/Meu';
import { Pronto } from './view/Pronto';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Meu" component={Meu} />
        <Route exact path="/">
          <Redirect to="/Pronto" />
        </Route>
        <Route exact path="/Pronto" component={Pronto} />
      </Switch>
    </div>
  );
};