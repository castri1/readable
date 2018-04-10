import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import CreateEdit from './CreateEdit';
import Category from './Category';
import PostDetail from './PostDetail';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories/:category" component={Category} />
          <Route exact path="/posts/new" component={CreateEdit} />
          <Route exact path="/posts/:postId" component={PostDetail} />
          <Route exact component={NotFound} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
