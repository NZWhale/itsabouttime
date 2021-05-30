import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect, withRouter, RouteComponentProps,
} from "react-router-dom";
import MainPageComponent from "./components/MainPageComponent";
import FullArchiveComponent from "./components/FullArchiveComponent";
import WeekliesComponent from "./components/WeekliesComponent";
import GenerativePoemsComponent from "./components/GenerativePoemsComponent";
import PackagingComponent from "./components/PackagingComponent";
import StudioWallComponent from "./components/StudioWallComponent";
import TimeFontComponent from "./components/TimeFontComponent";
import WatchComponent from "./components/WatchComponent";
import PhotographsComponents from "./components/PhotographsComponents";
import PostersComponent from "./components/PostersComponent";
import CookieComponent from "./components/CookieComponent";
import AboutComponent from "./components/AboutComponent";


class App extends React.Component {
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Route path="/main">
                    <MainPageComponent/>
                </Route>
                <Route path="/archive">
                    <FullArchiveComponent/>
                </Route>
                <Route path="/weeklies">
                    <WeekliesComponent/>
                </Route>
                <Route path="/poems">
                    <GenerativePoemsComponent/>
                </Route>
                <Route path="/packanging">
                    <PackagingComponent/>
                </Route>
                <Route path="/walls">
                    <StudioWallComponent/>
                </Route>
                <Route path="/fonts">
                    <TimeFontComponent/>
                </Route>
                <Route path="/watch">
                    <WatchComponent/>
                </Route>
                <Route path="/photographs">
                    <PhotographsComponents/>
                </Route>
                <Route path="/posters">
                    <PostersComponent />
                </Route>
                <Route path='/cookie'>
                <CookieComponent/>
                </Route>
                <Route path='/about'>
                    <AboutComponent/>
                </Route>
                <Redirect from='/' to='main'/>
            </Router>
        )
    }
}

export default App;
