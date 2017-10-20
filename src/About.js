import React, { Component } from 'react';
import { 
    AboutContainer,
    Card, 
    ImageCircle,
    TextTitleContents,
    TextTitle,
    TextYellow,
    TextFooter,
    TextContents
    } from './constComponents';


export default class About extends Component {
    render() {
        return (
            <AboutContainer>

                <Card>
                    <TextTitle>
                        About Me
                    </TextTitle>
                    <ImageCircle />
                 
                    <TextTitleContents>
                        Hello! I'm <TextYellow>Alwyn M. Villanueva</TextYellow>
                    </TextTitleContents>
                    <hr className="divider2"/> 
                    <TextContents>
                        I'm a Manila-based freelancer.I currently work at an Enterprise Company as a front-end developer. I create beautiful and functional websites for small businesses. 
                    </TextContents>
                    <TextContents>
                        I have diverse set of skills, ranging from design to HTML + CSS + Javascript, all the way to ReactJS, Python, Mobile Apps and .Net Framework.
                    </TextContents>
                    <hr className="divider2"/> 
                    <TextFooter>
                        <a target="_blank"><span className="fa fa-facebook socialicons"/></a>
                        <a target="_blank"><span className="fa fa-twitter socialicons"/></a>
                        <a target="_blank"><span className="fa fa-linkedin socialicons"/></a>
                        <a target="_blank"><span className="fa fa-github socialicons"/></a>
                    </TextFooter>
                </Card>
            </AboutContainer>
        )
    }
}
