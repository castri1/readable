import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Layout, Home, CreateEdit, Category, PostDetail, NotFound } from './views';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories/:category" component={Category} />
          <Route exact path="/posts/:postId" component={PostDetail} />
          <Route exact path="/posts/new" component={CreateEdit} />
          <Route exact path="/posts/:postId/edit" component={CreateEdit} />
          <Route exact component={NotFound} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
