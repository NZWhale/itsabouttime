import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
    Navigation
} from 'swiper/core';
import itAboutTimeFont from '../content/Time Font/ItAboutTimeFont.jpg'
import firstFont from '../content/Time Font/The Font-01.png'
import secondFont from '../content/Time Font/The Font-03.png'
import thirdFont from '../content/Time Font/The Font-04.png'
import fourthFont from '../content/Time Font/The Font-05.png'
import {RouteComponentProps, withRouter} from "react-router-dom";

SwiperCore.use([Navigation]);

class TimeFontComponent extends React.Component<RouteComponentProps> {
    render() {
        const fontsArray = [firstFont, secondFont, thirdFont, fourthFont]
        const swiperSlides = fontsArray.map(font => <SwiperSlide><img src={font} style={{width: "465px", height: "70px"}}/></SwiperSlide>)
        return (
            <>
                <div className="headerButtons">
                    <a style={{marginTop: "19px", cursor: "pointer", marginLeft: "23px", fontSize: "14px"}} onClick={() => {
                        this.props.history.push('/archive')
                    }}>FULLARCHIVE</a><a
                    style={{marginTop: "19px", marginRight: "23px", fontSize: "14px"}}>ABOUT</a>
                </div>
                <div className="headerDiv">
                    <h1> It's About Time</h1>
                </div>
                <div className="headerDiv">
                    <h4>Times Font</h4>
                </div>
                <div className="headerDiv" >
                    <p style={{width: "435px", textAlign: "center"}}>Typeface was made as an attempt to research ways to translate the passing of time through typography.<br/><br/>
                        The typeface was distored via sctipr that run once a day. I later transferred it into Glyphs and created a typeface everyday.</p>
                </div>

                <div style={{
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap"
                }}>
                    <Swiper navigation={true} className="mySwiper" style={{marginLeft: "150px", marginTop: "200px"}}>
                        {swiperSlides}
                    </Swiper>
                    <img src={itAboutTimeFont} style={{width: "507px", height: "671px", marginTop: "50px", marginLeft: "250px"}}/>
                </div>
            </>
        );
    }
}

export default withRouter(TimeFontComponent)