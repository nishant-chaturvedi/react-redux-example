import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute} from 'react-router';

import {store, history} from './applicationState';

import Home from './containers/home.jsx';
import Jokes from './containers/jokes.jsx';


class App extends React.Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

const routes = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="home" component={Home} />
                <Route path="jokes" component={Jokes} />
            </Route>
        </Router>
    </Provider>
);

ReactDom.render(routes, document.getElementById("app"));
