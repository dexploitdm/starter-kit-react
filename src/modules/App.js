import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HeaderViewContainer from '../component/header/HeaderView';
import HomeViewContainer from './home/HomeViewContainer';
import AboutView from './about/AboutView';
import PostPageViewContainer from './postPage/PostPageViewContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <main>
            <HeaderViewContainer />
            <Switch>
              <Route exact path="/" component={HomeViewContainer} />
              <Route exact path="/about" component={AboutView} />
              <Route exact path="/postpage" component={PostPageViewContainer} />
            </Switch>
          </main>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

