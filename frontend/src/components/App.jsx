import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import CreateEdit from './CreateEdit';

class App extends Component {
  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts/new" component={CreateEdit} />

      </Layout>
    );
  }
}

export default App;
