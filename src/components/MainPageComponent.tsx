import React from 'react';
import {RouteComponentProps, withRouter} from "react-router-dom";

class MainPageComponent extends React.Component<RouteComponentProps> {
    getRandomPage(){
        const arrayOfPagesUrls = ["/weeklies", "/poems", "/packanging", "/walls", "/fonts", "/watch", "/photographs"]
        const randomNum = Math.floor(Math.random() * arrayOfPagesUrls.length)
        return arrayOfPagesUrls[randomNum]
    }
    render() {
        return (
            <>
                <div className="headerButtons">
                    <a style={{marginTop: "19px", cursor: "pointer", marginLeft: "23px", fontSize: "24px"}} onClick={() => {
                        this.props.history.push('/archive')
                    }}>FULL ARCHIVE</a><a
                    style={{marginTop: "19px", cursor: "pointer", marginRight: "23px", fontSize: "20px"}} onClick={() => {
                    this.props.history.push('/about')
                }}>ABOUT</a>
                </div>
                <div className="alignCenter">
                    <button
                        className="mainButton"
                        onClick={() => {
                            this.props.history.push(this.getRandomPage())
                        }}
                        style={{cursor: "pointer"}}
                    >
                        <a className='buttonText'>IT'S ABOUT TIME</a>
                    </button>
                </div>
            </>
        );
    }
}

export default withRouter(MainPageComponent);
