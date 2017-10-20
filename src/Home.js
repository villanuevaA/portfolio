import React, { Component } from 'react';
import { Container, Wrapper, TextTitle, TextTitleHeader, TextContainer } from './constComponents';
import Particles from 'react-particles-js';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Wrapper>
                    <Particles className="particle" params={{
                        particles: {
                            color: { value: "#000" },
                            size: { value: 2 },
                            line_linked: {
                                color: "#000",
                                shadow: {
                                    enable: true,
                                    color: "#000",
                                    blur: 3
                                }
                            }
                        }
                    }} />

                </Wrapper>
                <TextContainer>
                    <TextTitle>
                        Alwyn M. Villanueva
                    </TextTitle>
                    <hr className="divider"/> 
                    <TextTitleHeader>
                        Front-end Developer
                    </TextTitleHeader>


                </TextContainer>

            </Container>
        );
    }

}