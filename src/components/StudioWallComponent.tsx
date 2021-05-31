import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
    Navigation
} from 'swiper/core';
import first from '../content/wall/1.png'
import second from '../content/wall/2.png'
import third from '../content/wall/3.png'
import fourth from '../content/wall/4.png'
import fifth from '../content/wall/5.png'
import sixth from '../content/wall/6.png'
import seventh from '../content/wall/7.png'
import eighth from '../content/wall/8.png'
import ninth from '../content/wall/9.png'
import tenth from '../content/wall/10.png'
import eleventh from '../content/wall/11.png'
import twelfth from '../content/wall/12.png'
import thirteenth from '../content/wall/13.png'
import fourteenth from '../content/wall/14.png'
import fifteenth from '../content/wall/15.png'
import sixteenth from '../content/wall/16.png'
import seventeenth from '../content/wall/17.png'
import eighteenth from '../content/wall/18.png'
import {RouteComponentProps, withRouter} from "react-router-dom";

SwiperCore.use([Navigation]);

class StudioWallComponent extends React.Component<RouteComponentProps> {
    render() {
        const wallsArray = [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth, eleventh, twelfth, thirteenth, fourteenth, fifteenth, sixteenth, seventeenth, eighteenth]
        const swiperSlides = wallsArray.map(wall => <SwiperSlide><img src={wall} id="poemImg"/></SwiperSlide>)
        return (
            <>
                <div className="headerButtons">
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
                    <h4>Studio Wall</h4>
                </div>
                <div className="headerDiv" >
                    <p style={{padding: "12px", width: "435px", textAlign: "center"}}>A documentation of my studio wall. I photographed it every time I arrived at the studio.<br/><br/>
                        The process started once I noticed that some of the cards with the slogans started falling off the wall.


                    </p>
                </div>
                <div
                    id='weekliesDiv'
                    style={{
                    width: "100%",
                    // height: "70%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Swiper navigation={true} className="mySwiper">
                        {swiperSlides}
                    </Swiper>
                </div>
            </>
        );
    }
}

export default withRouter(StudioWallComponent)