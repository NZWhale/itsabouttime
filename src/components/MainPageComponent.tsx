import React from 'react';
import {RouteComponentProps, withRouter} from "react-router-dom";

class MainPageComponent extends React.Component<RouteComponentProps> {
    getRandomPage(){
        const arrayOfPagesUrls = ["/archive", "/weeklies", "/poems", "/packing", "/walls", "/fonts", "/watch", "/photographs"]
        const randomNum = Math.floor(Math.random() * arrayOfPagesUrls.length)
        return arrayOfPagesUrls[randomNum]
    }
    render() {
        return (
            <>
                <div className="headerButtons">
                    <a style={{marginTop: "19px", cursor: "pointer", marginLeft: "23px", fontSize: "14px"}} onClick={() => {
                        this.props.history.push('/archive')
                    }}>FULLARCHIVE</a><a
                    style={{marginTop: "19px", marginRight: "23px", fontSize: "14px"}}>ABOUT</a>
                </div>
                <div className="alignCenter">
                    <button
                        className="mainButton"
                        onClick={() => {
                            this.props.history.push(this.getRandomPage())
                        }}
                        style={{cursor: "pointer"}}
                    >
                        IT'S ABOUT TIME
                    </button>
                </div>
            </>
        );
    }
}

export default withRouter(MainPageComponent);
