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
import {RouteComponentProps, withRouter} from "react-router-dom";

SwiperCore.use([Navigation]);

class PackagingComponent extends React.Component<RouteComponentProps> {
    render() {
        const packangingsArray = [first, second, third, fourth, fifth]
        const swiperSlides = packangingsArray.map(packanging => <SwiperSlide><img src={packanging} className='packangingImage'/></SwiperSlide>)
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
                    <h4>Packanging</h4>
                </div>
                <div className="headerDiv" >
                    <p style={{padding: "12px", width: "435px", textAlign: "center"}}>A series of formless packaging. They hug the product in such a way that it is impossible to guess what is inside. The viewer see the words/slogans first, the product inside it after.<br/><br/>
                        This sub-outcome was made during the first stage of the project in an attempt to reserach the relationship between the slogans and the advertised products. </p>
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Swiper navigation={true} className="mySwiper" id="packangingSwipe">
                        {swiperSlides}
                    </Swiper>
                </div>
            </>
        );
    }
}

export default withRouter(PackagingComponent)