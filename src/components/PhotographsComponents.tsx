import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
    Navigation
} from 'swiper/core';
import first from '../content/packaging/1.png'
import second from '../content/packaging/2.png'
import third from '../content/packaging/3.png'
import fourth from '../content/packaging/4.png'
import fifth from '../content/packaging/5.png'
import itAboutTimeFont from "../content/Time Font/ItAboutTimeFont.jpg";
import {RouteComponentProps, withRouter} from "react-router-dom";

SwiperCore.use([Navigation]);

class PhotographsComponents extends React.Component<RouteComponentProps> {
    render() {
        const packangingsArray = [first, second, third, fourth, fifth]
        const swiperSlides = packangingsArray.map(packanging => <SwiperSlide><img src={packanging} style={{width: "292px", height: "516px"}}/></SwiperSlide>)
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
                    <h4>85 Photographs</h4>
                </div>
                <div className="headerDiv" >
                    <p style={{width: "435px", textAlign: "center"}}>85 Photographs (To – From) is a publication that features 85 photographs that I took on my way to and from Britanka from January to May 2021.<br/><br/>
                        All pictures taken on my Iphone 11 Pro Max.
                    </p>
                </div>
                <div style={{
                    width: "50%",
                    height: "70%",
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap"
                }}>
                    <Swiper navigation={true} className="mySwiper" style={{marginLeft: "150px", marginTop: "100px"}}>
                        {swiperSlides}
                    </Swiper>
                    <Swiper navigation={true} className="mySwiper" style={{marginLeft: "250px", marginTop: "100px"}}>
                        {swiperSlides}
                    </Swiper>
                </div>
            </>
        );
    }
}

export default withRouter(PhotographsComponents)