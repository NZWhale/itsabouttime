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

class FullArchiveComponent extends React.Component<RouteComponentProps> {
    render() {
        return (
            <>
                <div className="headerButtons">
                    <a style={{marginTop: "19px", marginLeft: "23px", fontSize: "20px", cursor: "pointer"}} onClick={() => {
                        this.props.history.push('/archive')
                    }}>FULL ARCHIVE</a><a
                    style={{marginTop: "19px", cursor: "pointer", marginRight: "23px", fontSize: "20px"}}onClick={() => {
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
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                    <img
                        className='posterImg'
                        src={poster}
                        onClick={() => {
                            this.props.history.push('/posters')
                        }}
                    />
                    <img
                        className="photoImg"
                        src={photographs}
                        onClick={() => {
                            this.props.history.push('/photographs')
                        }}
                    />
                    <img
                        className="cookieImg"
                        src={fortuneCookies}
                        onClick={() => {
                            this.props.history.push('/cookie')
                        }}
                    />
                    <img
                        className="poetryImg"
                        src={poetryBook}
                        onClick={() => {
                            this.props.history.push('/poems')
                        }}
                    />
                    <img
                        className="weekliesImg"
                        src={weeklies}
                        onClick={() => {
                            this.props.history.push('/weeklies')
                        }}
                    />
                    <img
                        className="watchImg"
                        src={watch}
                        onClick={() => {
                            this.props.history.push('/watch')
                        }}
                    />
                    <img
                        className="wallImg"
                        src={wall}
                        onClick={() => {
                            this.props.history.push('/walls')
                        }}
                    />
                    <img
                        className="packangingImg"
                        src={packaging}
                        onClick={() => {
                            this.props.history.push('/packanging')
                        }}
                    />
                    <img
                        className="fontImg"
                        src={font}
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