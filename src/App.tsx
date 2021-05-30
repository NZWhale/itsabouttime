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


class App extends React.Component {
    render() {
        return (
            <>
            <Router>
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
            </Router>
            </>
        )
    }
}

export default App;
