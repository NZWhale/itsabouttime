import React from 'react'
import poster from '../content/Архив/Posters.jpg'
import photographs from '../content/Архив/85 Photographs.png'
import fortuneCookies from '../content/Архив/FortuneCookies.png'
import poetryBook from '../content/Архив/poetrybook.png'
import weeklies from '../content/Архив/Weeklies.png'
import watch from '../content/Архив/Forever Chasing Tomorrow Watch.png'
import wall from '../content/Архив/Wall.png'
import packaging from '../content/Архив/packaging.png'
import font from '../content/Time Font/The Font-03.png'
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
import cookies12 from '../content/cookies/Cookies12.jpg'
import cookies13 from '../content/cookies/Cookies13.png'

class FullArchiveComponent extends React.Component<RouteComponentProps> {
    render() {
        return (
            <>
                <div className="headerButtons">
                    <a style={{marginTop: "19px", marginLeft: "23px", fontSize: "14px", cursor: "pointer"}} onClick={() => {
                        this.props.history.push('/archive')
                    }}>FULLARCHIVE</a><a
                    style={{marginTop: "19px", marginRight: "23px", fontSize: "14px"}}>ABOUT</a>
                </div>
                <div className="headerDiv">
                    <h1> It's About Time</h1>
                </div>
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                    <img
                        src={poster}
                        style={{width: "722px", cursor: "pointer", height: "919px", marginTop: "300px"}}
                        onClick={() => {
                            this.props.history.push('/posters')
                        }}
                    />
                    <img
                        src={photographs}
                        style={{width: "544", height: "490px", cursor: "pointer", marginTop: "515px", marginLeft: "52px"}}
                        onClick={() => {
                            this.props.history.push('/photographs')
                        }}
                    />
                    <img
                        src={fortuneCookies}
                        style={{width: "1010px", cursor: "pointer", height: "1123px"}}
                        onClick={() => {
                            this.props.history.push('/cookie')
                        }}
                    />
                    <img
                        src={poetryBook}
                        style={{width: "852px", cursor: "pointer", height: "602px", marginLeft: "100px"}}
                        onClick={() => {
                            this.props.history.push('/poems')
                        }}
                    />
                    <img
                        src={weeklies}
                        style={{width: "559px", cursor: "pointer", height: "288px", marginTop: "200px"}}
                        onClick={() => {
                            this.props.history.push('/weeklies')
                        }}
                    />
                    <img
                        src={watch}
                        style={{width: "252px", height: "249px", cursor: "pointer", marginTop: "150px", marginLeft: "150px"}}
                        onClick={() => {
                            this.props.history.push('/watch')
                        }}
                    />
                    <img
                        src={wall}
                        style={{width: "556px", cursor: "pointer", height: "595px", marginLeft: "250px"}}
                        onClick={() => {
                            this.props.history.push('/walls')
                        }}
                    />
                    <img
                        src={packaging}
                        style={{width: "426px", cursor: "pointer", height: "525px", marginLeft: "280px"}}
                        onClick={() => {
                            this.props.history.push('/packanging')
                        }}
                    />
                    <img
                        src={font}
                        style={{width: "752px", cursor: "pointer", height: "212px", marginTop: "200px"}}
                        onClick={() => {
                            this.props.history.push('/fonts')
                        }}
                    />
                </div>
            </>
        );
    }
}

export default withRouter(FullArchiveComponent)