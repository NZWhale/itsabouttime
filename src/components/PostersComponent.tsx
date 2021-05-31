import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
    Navigation
} from 'swiper/core';
import {RouteComponentProps, withRouter} from "react-router-dom";
import first from '../content/posters/53.jpg'
import p0 from '../content/posters/P0.jpg'
import p1 from '../content/posters/P1.jpg'
import p2 from '../content/posters/P2.jpg'
import p3 from '../content/posters/P3.jpg'
import p4 from '../content/posters/P4.jpg'
import p5 from '../content/posters/P5.jpg'
import p6 from '../content/posters/P6.jpg'
import p7 from '../content/posters/P7.jpg'
import p8 from '../content/posters/P8.jpg'
import p9 from '../content/posters/P9.jpg'
import p10 from '../content/posters/P10.jpg'
import p11 from '../content/posters/P11.jpg'
import p12 from '../content/posters/P12.jpg'
import p13 from '../content/posters/P13.jpg'
import p14 from '../content/posters/P14.jpg'
import p15 from '../content/posters/P15.jpg'
import p16 from '../content/posters/P16.jpg'
import p17 from '../content/posters/P17.jpg'
import p18 from '../content/posters/P18.jpg'
import p19 from '../content/posters/P19.jpg'
import p20 from '../content/posters/P20.jpg'
import p21 from '../content/posters/P21.jpg'
import p22 from '../content/posters/P22.jpg'
import p23 from '../content/posters/P23.jpg'
import p24 from '../content/posters/P24.jpg'
import p25 from '../content/posters/P25.jpg'
import p26 from '../content/posters/P26.jpg'
import p27 from '../content/posters/P27.jpg'
import p28 from '../content/posters/P28.jpg'
import p29 from '../content/posters/P29.jpg'
import p30 from '../content/posters/P30.jpg'
import p31 from '../content/posters/P31.jpg'
import p32 from '../content/posters/P32.jpg'
import p33 from '../content/posters/P33.jpg'
import p34 from '../content/posters/P34.jpg'
import p35 from '../content/posters/P35.jpg'
import p36 from '../content/posters/P36.jpg'
import p37 from '../content/posters/P37.jpg'
import p39 from '../content/posters/P39.jpg'
import p40 from '../content/posters/P40.jpg'
import p42 from '../content/posters/P42.jpg'
import p43 from '../content/posters/P43.jpg'
import p44 from '../content/posters/P44.jpg'
import p45 from '../content/posters/P45.jpg'
import p46 from '../content/posters/P46.jpg'
import p47 from '../content/posters/P47.jpg'
import p48 from '../content/posters/P48.jpg'
import p49 from '../content/posters/P49.jpg'
import p50 from '../content/posters/P50.jpg'
import p51 from '../content/posters/P51.jpg'
import p52 from '../content/posters/P52.jpg'

SwiperCore.use([Navigation]);

class PostersComponent extends React.Component<RouteComponentProps> {
    render() {
        const postersArray = [first, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36, p37, p39, p40, p42, p43, p44, p45, p46, p47, p48, p49, p50, p51, p52]
        const swiperSlides = postersArray.map(poster => <SwiperSlide><img src={poster} className='swiperPosterImg'/></SwiperSlide>)
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
                    <h1> It's About Time</h1>
                </div>
                <div className="headerDiv">
                    <h4>Posters</h4>
                </div>
                <div className="headerDiv" >
                    <p style={{padding: "12px", width: "435px", textAlign: "center"}}>The posters come together to form 365 days, where each poster equals seven days. To highlight the individuality and the lack of strict chronology the posters are not bound together and can be hung in any order. The calendar grid depicts seven holes drilled through the top of the posters and Monday – Sunday printed on top of the designs. Much like I believe that a poster can be a painting, a sculpture, a publication, etc., I am convinced that a calendar can take any form and present itself through any medium as long as it somehow signifies the passing of time. In this case, the grid challenges conventions and continues the language of my experimental posters by just being holes and two words – the first and the last day of the week.</p>
                </div>
                <div
                    id="weekliesDiv"
                    style={{
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

export default withRouter(PostersComponent)