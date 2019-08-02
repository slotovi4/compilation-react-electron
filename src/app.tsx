import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HomeContainer } from './containers';
import { browserHistory, store } from './redux/store';
import { ConnectedRouter } from 'connected-react-router';

class App extends React.Component {
    public render () {
        return (
            <Provider store={store}>
                <ConnectedRouter history={browserHistory}>
                    <Router>
                        <Switch>
                            <Route exact={true} path="/" component={HomeContainer} />
                        </Switch>
                    </Router>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
