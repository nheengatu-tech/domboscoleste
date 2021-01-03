import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import { JsonBoxProvider } from "react-jsonbox";
import { createBrowserHistory } from "history";
import {
  Login,
  User,
  Home,
  AboutUs,
  Education,
  Contact,
  Notice,
  NoticeList,
  TotemHome,
} from "./pages";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { WIPNotice } from "./pages/WIPNotice";
import { SecNotice } from "./pages/SecNotice";
import { ThNotice } from "./pages/ThNotice";
import { FourNotice } from "./pages/FourNotice";
import { FifthNotice } from "./pages/FifthNotice";
import { SixthNotice } from "./pages/SixthNotice";
import { BannerCrud, Post } from "./pages/Admin"
import logoCdbl from "./images/logo-cdbl.png";
import { Helmet } from "react-helmet";
// import { SuspenseWithPerf} from 'reactfire';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      {/* <SuspenseWithPerf
        fallback={<div
          style={{
            display: "flex",
            height: "-webkit-fill-available",
          }}
        >
          <Loading />
        </div>}
        traceId={'load-status'}
      > */}
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://www.domboscoleste.com.br" />
        <meta name="description" content="Parceria de Sucesso!" />
        <meta property="og:title" content="Colégio Dom Bosco Leste"></meta>
        <meta property="og:image" content={logoCdbl}></meta>
      </Helmet>
      <HashRouter basename="/">
        <JsonBoxProvider
          value={{ url: "https://jsonbox.io", id: "box_eab95f446b02b61b6379" }}
        >
          {/* <Header /> */}
          {/* <Menu history={history} /> */}
          <Switch>
            <Route
              exact={true}
              path={"/"}
              component={(props) => (
                <>
                  <Header />
                  <Menu history={history} />
                  <Home history={history} {...props}></Home>
                  <Footer />
                </>
              )}
            />
            <Route
              exact={false}
              path={"/institucional"}
              component={(props) => (
                <>
                  <Header />
                  <Menu history={history} />
                  <AboutUs history={history} {...props}></AboutUs>
                  <Footer />
                </>
              )}
            />
            {/* TOTEM */}
            <Route
              exact={false}
              path={"/totem"}
              component={(props) => (
                <TotemHome history={history} {...props}></TotemHome>
              )}
            />
            {/* FIM ROTAS TOTEM */}
            <Route
              exact={true}
              path={"/noticias"}
              component={(props) => (
                <>
                  <Header />
                  <Menu history={history} />
                  <NoticeList history={history} {...props}></NoticeList>
                  <Footer />
                </>
              )}
            />
            {/* <Route
              exact={true}
              path={"/noticias/edital-bolsas-2021-cdbl"}
              component={(props) => (
                <>
                  <Header />
                  <Menu history={history} />
                  <WIPNotice history={history} {...props}></WIPNotice>
                  <Footer />
                </>
              )}
            /> */}
            {/* <Route
              exact={true}
              path={"/noticias/campanha-matriculas-2021"}
              component={(props) => (
                <>
                  <Header />
                  <Menu history={history} />
                  <SecNotice history={history} {...props}></SecNotice>
                  <Footer />
                </>
              )}
            /> */}
            {/* <Route
              exact={true}
              path={"/noticias/campanha-setembro-amarelo-2020"}
              component={(props) => (
                <>
                  <Header />
                  <Menu history={history} />
                  <ThNotice history={history} {...props}></ThNotice>
                  <Footer />
                </>
              )}
            /> */}
            {/* <Route
              exact={true}
              path={"/noticias/semana-da-crianca"}
              component={(props) => (
                <>
                  <Header />
                  <Menu history={history} />
                  <FourNotice history={history} {...props}></FourNotice>
                  <Footer />
                </>
              )}
            /> */}
            {/* <Route
              exact={true}
              path={"/noticias/teatro-cdbl-ensino-medio"}
              component={(props) => (
                <>
                  <Header />
                  <Menu history={history} />
                  <FifthNotice history={history} {...props}></FifthNotice>
                  <Footer />
                </>
              )}
            /> */}
            {/* <Route
              exact={true}
              path={"/noticias/voce-faz-a-feira"}
              component={(props) => (
                <>
                  <Header />
                  <Menu history={history} />
                  <SixthNotice history={history} {...props}></SixthNotice>
                  <Footer />
                </>
              )}
            /> */}

            <Route
              exact={false}
              path={"/noticias/:title"}
              component={(props) => (
                <>
                  <Header />
                  <Menu history={history} />
                  <Notice history={history} {...props}></Notice>
                  <Footer />
                </>
              )}
            />
            <Route
              exact={false}
              path={"/usuarios"}
              component={(props) => <User history={history} {...props}></User>}
            />
            <Route
              exact={false}
              path={"/admin/noticias"}
              component={(props) => <Post history={history} {...props}></Post>}
            />
            <Route
              exact={false}
              path={"/admin/banners"}
              component={(props) => <BannerCrud history={history} {...props}></BannerCrud>}
            />
            <Route
              exact={false}
              path={"/login"}
              component={(props) => (
                <Login history={history} {...props}></Login>
              )}
            />
            <Route
              exact={false}
              path="/ensino"
              component={(props) => (
                <>
                  <Header />
                  <Menu history={history} />
                  <Education history={history} {...props}></Education>
                  <Footer />
                </>
              )}
            />
            <Route
              exact={false}
              path="/fale-conosco"
              component={(props) => (
                <>
                  <Header />
                  <Menu history={history} />
                  <Contact history={history} {...props}></Contact>
                  <Footer />
                </>
              )}
            />
            <Route
              exact={false}
              path="/fake-post"
              component={(props) => (
                <>
                  <Header />
                  <Menu history={history} />
                  <Notice history={history} {...props}></Notice>
                  <Footer />
                </>
              )}
            />
          </Switch>
          {/* <Footer /> */}
        </JsonBoxProvider>
      </HashRouter>
      {/* </SuspenseWithPerf> */}
    </div>
  );
}

export default App;
