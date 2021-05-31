import React from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import cookies1 from '../content/cookies/Cookies1.png'
import cookies2 from '../content/cookies/Cookies2.png'
import cookies4 from '../content/cookies/Cookies4.png'
import cookies5 from '../content/cookies/Cookies5.png'
import cookies6 from '../content/cookies/Cookies6.png'
import cookies7 from '../content/cookies/Cookies7.png'
import cookies8 from '../content/cookies/Cookies8.png'
import cookies9 from '../content/cookies/Cookies9.png'
import cookies10 from '../content/cookies/Cookies10.png'
import cookies11 from '../content/cookies/Cookies11.png'
import cookies13 from '../content/cookies/Cookies13.png'

class CookieComponent extends React.Component<RouteComponentProps> {
    getRandomImage(){
        const arrayOfPagesUrls = [cookies1, cookies2, cookies4, cookies5, cookies6, cookies7, cookies8, cookies9, cookies10, cookies11, cookies13 ]
        const randomNum = Math.floor(Math.random() * arrayOfPagesUrls.length)
        return arrayOfPagesUrls[randomNum]
    }
    render() {
        return (
            <><div className="headerButtons">
                <a style={{marginTop: "19px", cursor: "pointer", marginLeft: "23px", fontSize: "20px"}} onClick={() => {
                    this.props.history.push('/archive')
                }}>FULL ARCHIVE</a><a
                style={{marginTop: "19px", marginRight: "23px", fontSize: "20px", cursor: "pointer"}} onClick={() => {
                this.props.history.push('/about')
            }}>ABOUT</a>
            </div>
                <div style={{
                    width: "100%",
                    height: "70%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <img src={this.getRandomImage()} className="fortuneImg" style={{cursor: "pointer"}} onClick={() => {
                        this.props.history.push('/archive')
                    }}/>
                </div>
            </>
        );
    }
}

export default withRouter(CookieComponent)