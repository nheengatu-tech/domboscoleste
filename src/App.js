import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { HashRouter, Route, Router, Switch } from "react-router-dom";
import { JsonBoxProvider } from "react-jsonbox";
import { createBrowserHistory } from "history";
import { Home, AboutUs, Education } from './pages'
import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { Footer } from './components/Footer'

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <JsonBoxProvider
            value={{ url: "https://jsonbox.io", id: "box_eab95f446b02b61b6379" }}
          >
          <Header />
          <Menu history={history} />
          <Switch>
            <Route
              exact={true}
              path={"/"}
              component={(props) => (
                <Home history={history} {...props}></Home>
              )}
            />
            <Route
              exact={false}
              path={'/institucional'}
              component={(props) => (
                <AboutUs history={history} {...props}></AboutUs>
              )}
            />
            <Route
              exact={false}
              path="/ensino"
              component={(props) => (
                <Education history={history} {...props}></Education>
              )}
            />
          </Switch>
          <Footer />
        </JsonBoxProvider>
      </HashRouter>
    </div>
  );
}

export default App;
