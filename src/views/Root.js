import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import Home from 'views/Home';
import Storage from 'views/Storage';
import ShoppingList from 'views/ShoppingList';
import Settings from 'views/Settings';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/storage" component={Storage} />
          <Route path="/shopping" component={ShoppingList} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
