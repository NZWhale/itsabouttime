import React from 'react';
import {RouteComponentProps, withRouter} from "react-router-dom";

class AboutComponent extends React.Component<RouteComponentProps> {
    render() {
        return (
            <>
                <div className="headerButtons">
                    <a style={{marginTop: "19px", cursor: "pointer", marginLeft: "23px", fontSize: "20px"}} onClick={() => {
                        this.props.history.push('/archive')
                    }}>FULL ARCHIVE</a>
                    <a style={{marginTop: "19px", cursor: "pointer", marginRight: "23px", fontSize: "20px" }} onClick={() => {
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
                    <h4>About the project</h4>
                </div>
                <div className="headerDiv" >
                    <p style={{padding: "12px", width: "435px", textAlign: "center"}}>It’s About Time project is a multilayered visual diary that takes the form of a calendar/a publication. The front side is a calendar that depicts experimental posters prompted by the language about time. The backside is a publication that takes the form of a visual essay containing every sub-outcome I created throughout.
                        <br/><br/>
                        The project went from advertisement critique to researching time-related slogans to finally discovering, accepting, and developing my practice and my voice as a designer through a series of prompts. The title of the project refers to the research theme of the project and works as an ironic note about me taking so long to analyze and accept my practice.
                        <br/><br/>
                        The posters come together to form 365 days, where each poster equals seven days + one poster that equals one day. To highlight the individuality and the lack of strict chronology the posters are not bound together and can be hung in any order. The calendar grid depicts seven holes drilled through the top of the posters and Monday – Sunday printed on top of the designs. Much like I believe that a poster can be a painting, a sculpture, a publication, a therapy tool, etc., I am convinced that a calendar can take any form and present itself through any medium as long as it somehow signifies the passing of time. In this case, the grid continues the language of my experimental posters by just being holes and two words – the first and the last day of the week.
                        <br/><br/>
                        Each poster contains my interpretation of the slogan about time and consists of my personal associations. An example would be a poster made in response to an Inventing the Future prompt, where I am using works by Marcel Duchamp and rethinking them in a medium of a poster. In a way, the calendar turned out to be a visual/formal manifesto about what a poster can be.
                        <br/><br/>
                        The backsides of the posters depict my search during the project through sub-outcomes. The sub-outcomes include – a publication 111 Generative Poems, a photo book with photographs that I took from January to May on my way to and from Britankа, seven pairs of 'weeklies' underwear, fortune cookies, and a series of photographs documenting the studio wall with the slogans that gets empty, as the time goes by.</p>
                </div>
            </>
        );
    }
}

export default withRouter(AboutComponent);
