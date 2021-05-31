import React from "react";
import watch from '../content/Архив/Forever Chasing Tomorrow Watch.png'
import {RouteComponentProps, withRouter} from "react-router-dom";

class WatchComponent extends React.Component<RouteComponentProps> {
    render() {
        return (
            <><div className="headerButtons">
                <a style={{marginTop: "19px", cursor: "pointer", marginLeft: "23px", fontSize: "20px"}} onClick={() => {
                    this.props.history.push('/archive')
                }}>FULL ARCHIVE</a><a
                style={{marginTop: "19px", cursor: "pointer", marginRight: "23px", fontSize: "20px"}} onClick={() => {
                this.props.history.push('/about')
            }}>ABOUT</a>
            </div>

                <div className="headerDiv">
                    <h1
                        style={{cursor: "pointer"}}
                        onClick={() => {
                        this.props.history.push('/main')
                    }}> It's About Time</h1>
                </div>
                <div className="headerDiv">
                    <h4>Forever Chasing Tomorrow Watch</h4>
                </div>

                <div style={{
                    width: "100%",
                    height: "70%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <img src={watch} style={{width: "400px", height: "400px"}}/>
                </div>
            </>
        );
    }
}

export default withRouter(WatchComponent)