import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
    Navigation
} from 'swiper/core';
import poem from '../content/Poetry book/poem.png'
import poem2 from '../content/Poetry book/poem2.png'
import poem3 from '../content/Poetry book/poem3.png'
import poem4 from '../content/Poetry book/poem4.png'
import poetrybook from '../content/Poetry book/poetrybook.png'
import {RouteComponentProps, withRouter} from "react-router-dom";

SwiperCore.use([Navigation]);

class GenerativePoemsComponent extends React.Component<RouteComponentProps> {
    render() {
        const poemsArray = [poem, poem2, poem3, poem4, poetrybook]
        const swiperSlides = poemsArray.map(poem => <SwiperSlide><img src={poem} style={{
            width: "840px",
            height: "433px"
        }}/></SwiperSlide>)
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
                <div className="headerDiv">
                    <h4>111 Generative Poems</h4>
                </div>
                <div className="headerDiv">
                    <p style={{width: "435px"}}>A poetry book that consists of 111 poems/hairus generated by code. You
                        can download it in PDF.</p>
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

export default withRouter(GenerativePoemsComponent)