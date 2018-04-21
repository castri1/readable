import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Layout, Home, CreateEdit, Category, PostDetail, NotFound } from './views';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories/:category" component={Category} />
          <Route exact path="/posts/new" component={CreateEdit} />
          <Route exact path="/:category/:postId" component={PostDetail} />
          <Route exact path="/posts/:postId/edit" component={CreateEdit} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="404" />
        </Switch>
      </Layout>
    );
  }
}

export default App;
