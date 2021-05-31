import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
    Navigation
} from 'swiper/core';
import l1 from '../content/85photographs/Левая/L1.jpg'
import l2 from '../content/85photographs/Левая/L2.jpg'
import l3 from '../content/85photographs/Левая/L3.jpg'
import l4 from '../content/85photographs/Левая/L4.jpg'
import l5 from '../content/85photographs/Левая/L5.jpg'
import l6 from '../content/85photographs/Левая/L6.jpg'
import l7 from '../content/85photographs/Левая/L7.jpg'
import l8 from '../content/85photographs/Левая/L8.jpg'
import l9 from '../content/85photographs/Левая/L9.jpg'
import l10 from '../content/85photographs/Левая/L10.jpg'
import l11 from '../content/85photographs/Левая/L11.jpg'
import l12 from '../content/85photographs/Левая/L12.jpg'
import l13 from '../content/85photographs/Левая/L13.jpg'
import l14 from '../content/85photographs/Левая/L14.jpg'
import l15 from '../content/85photographs/Левая/L15.jpg'
import l16 from '../content/85photographs/Левая/L16.jpg'
import l17 from '../content/85photographs/Левая/L17.jpg'
import l18 from '../content/85photographs/Левая/L18.jpg'
import l19 from '../content/85photographs/Левая/L19.jpg'
import l20 from '../content/85photographs/Левая/L20.jpg'
import r1 from '../content/85photographs/Правая/R1.jpg'
import r2 from '../content/85photographs/Правая/R2.jpg'
import r3 from '../content/85photographs/Правая/R3.jpg'
import r4 from '../content/85photographs/Правая/R4.jpg'
import r5 from '../content/85photographs/Правая/R5.jpg'
import r6 from '../content/85photographs/Правая/R6.jpg'
import r7 from '../content/85photographs/Правая/R7.jpg'
import r8 from '../content/85photographs/Правая/R8.jpg'
import r9 from '../content/85photographs/Правая/R9.jpg'
import r10 from '../content/85photographs/Правая/R10.jpg'
import r11 from '../content/85photographs/Правая/R11.jpg'
import r12 from '../content/85photographs/Правая/R12.jpg'
import r13 from '../content/85photographs/Правая/R13.jpg'
import r14 from '../content/85photographs/Правая/R14.jpg'
import r15 from '../content/85photographs/Правая/R15.jpg'
import r16 from '../content/85photographs/Правая/R16.jpg'
import r17 from '../content/85photographs/Правая/R17.jpg'
import r18 from '../content/85photographs/Правая/R18.jpg'
import {RouteComponentProps, withRouter} from "react-router-dom";

SwiperCore.use([Navigation]);

class PhotographsComponents extends React.Component<RouteComponentProps> {
    render() {
        const leftPhotosArray = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16, l17, l18, l19, l20]
        const leftSwiperSlides = leftPhotosArray.map(leftPhoto => <SwiperSlide><img src={leftPhoto} className="swiperPosterImg"/></SwiperSlide>)
        const rightPhotosArray = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18]
        const rightSwiperSlides = rightPhotosArray.map(rightPhoto => <SwiperSlide><img src={rightPhoto} className="swiperPosterImg"/></SwiperSlide>)
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
                    <h4>85 Photographs</h4>
                </div>
                <div className="headerDiv" >
                    <p style={{padding: "12px", width: "435px", textAlign: "center"}}>85 Photographs (To – From) is a publication that features 85 photographs that I took on my way to and from Britanka from January to May 2021.<br/><br/>
                        All pictures taken on my Iphone 11 Pro Max.
                    </p>
                </div>
                <div style={{
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap"
                }}>
                    <Swiper navigation={true} className="mySwiper" id="leftPhotoSwiper" >
                        {leftSwiperSlides}
                    </Swiper>
                    <Swiper navigation={true} className="mySwiper" id="rightPhotoSwiper">
                        {rightSwiperSlides}
                    </Swiper>
                </div>
            </>
        );
    }
}

export default withRouter(PhotographsComponents)