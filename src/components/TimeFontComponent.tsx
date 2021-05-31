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
        const swiperSlides = fontsArray.map(font => <SwiperSlide><img src={font} style={{width: "100%", height: "70px"}}/></SwiperSlide>)
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
                    <h4>Times Font</h4>
                </div>
                <div className="headerDiv" >
                    <p style={{padding: "12px", width: "435px", textAlign: "center"}}>Typeface was made as an attempt to research ways to translate the passing of time through typography.<br/><br/>
                        The typeface was distored via sctipr that run once a day. I later transferred it into Glyphs and created a typeface everyday.</p>
                </div>

                <div className='timeFontDiv'>
                    <Swiper navigation={true} className="mySwiper" id="timeFontSwiper">
                        {swiperSlides}
                    </Swiper>
                    <img src={itAboutTimeFont} className="timeFontImg"/>
                </div>
            </>
        );
    }
}

export default withRouter(TimeFontComponent)