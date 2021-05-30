import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
    Navigation
} from 'swiper/core';
import secondPants from '../content/pants/2.png'
import thirdPants from '../content/pants/3.png'
import forthPants from '../content/pants/4.png'
import noTimeToDiePants from '../content/pants/NoTimeToDiePants.png'
import pantsMakeTheFirstImpression from '../content/pants/PantsMakeTheFirstImpression-copy.png'
import pantsPutAPause from '../content/pants/PantsPutAPause.png'
import pantsTimeForALittleLuxury from '../content/pants/PantsTimeForALittleLuxury-copy.png'
import {RouteComponentProps, withRouter} from "react-router-dom";

SwiperCore.use([Navigation]);

class WeekliesComponent extends React.Component<RouteComponentProps> {
    render() {
        const pantsArray = [secondPants, thirdPants, forthPants, noTimeToDiePants, pantsMakeTheFirstImpression, pantsPutAPause, pantsTimeForALittleLuxury]
        const swiperSlides = pantsArray.map(pants => <SwiperSlide><img src={pants} style={{
            width: "840px",
            height: "433px"
        }}/></SwiperSlide>)
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
                    <h4>Weeklies</h4>
                </div>
                <div className="headerDiv">
                    <p style={{width: "435px"}}>A collection of 7 pairs of underwear. The objects depict the passing of
                        time through everyday objects.</p>
                </div>
                <div style={{
                    width: "100%",
                    height: "70%",
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

export default withRouter(WeekliesComponent)