import styled from 'styled-components';
import {injectGlobal} from 'styled-components';
import media from './mediaStyles';
injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    @import url('https://fonts.googleapis.com/css?family=Montserrat');
    @import url('https://fonts.googleapis.com/css?family=Lato');
`;


export const Container = styled.div`
    background-image:url('${require('./assets/bg.jpg')}');
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    height:100vh;
    top:0;
    margin:0;

`;
export const Wrapper = styled.div`
    height:100vh;
    background-color:rgba(0,0,0,0.5);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-content:center;
    text-align:center;
    z-index:0;
    position:absolute;
    top:0;
    width:100%;
    margin:0;
`;
export const particleContainer = styled.div`
    z-index:-1;
    margin:0;
`;
export const TextContainer = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-content:center;
    text-align:center;
    z-index:1;
    font-family: 'Lato', sans-serif;
`;
export const TextTitle = styled.div`
    color:#fff;
    text-transform:Uppercase;
    margin:0;
    display:block;

    z-index:1;
    font-family: 'Lato', sans-serif;
    ${media.giant`font-size:4em;`}
    ${media.desktop`font-size:3.25em;`}
    ${media.tablet`font-size:2.25em;`}
    ${media.phone`font-size:1em;`}
`;
export const TextTitleHeader = styled.div`
    color:#f1c40f;
    text-transform:Uppercase;
    margin:0;
    font-size:1.5em;
    z-index:1;
    font-family: 'Montserrat', sans-serif;
    ${media.giant`font-size:3em;`}
    ${media.desktop`font-size:2em;`}
    ${media.tablet`font-size:1.5em;`}
    ${media.phone`font-size:0.65em;`}
`;
export const AboutContainer = styled.div`
    background:#15191D;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-content:center;
    text-align:center;
    z-index:1;
    font-family: 'Lato', sans-serif;
`;
export const Card=styled.div`

    height:70vh;
    width:50%;
    margin:0 auto;
    z-index:0;
    position:relative;
    top:-50px;
`;
export const ImageCircle=styled.div`
    border-radius:50%;
    height:150px;
    width:150px;
    background:#000;
    margin:10px auto;
    margin-top:20px;
    z-index:1;
    background-image:url('${require('./assets/avatar1.jpg')}');
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    border:3px solid #fff;

`;

export const TextYellow=styled.div`
    color:#f1c40f;
    display:inline-block;
    text-transform:uppercase;
    letter-spacing:2px;

`;
export const TextTitleContents=styled.div`
    color:#fff;
    display:inline-block;
    text-transform:uppercase;
    letter-spacing:2px;
    ${media.giant`font-size:3em;`}
    ${media.desktop`font-size:2em;`}
    ${media.tablet`font-size:1.5em;`}
    ${media.phone`font-size:0.65em;`}
`;
export const TextFooter=styled.div`
    display:block;
    margin:0 auto;
    color:#fff;
    position:relative;
    bottom:0;
    font-size:1.75em;
`;
export const TextContents = styled.div`
    ${media.giant`font-size:1.75em;`}
    ${media.desktop`font-size:1.5em;`}
    ${media.tablet`font-size:1em;`}
    ${media.phone`font-size:0.5em;`}
    color:#bdc3c7;
    letter-spacing:1.5px;
    margin:5px auto;
    margin-bottom:20px;
    font-family: 'Lato', sans-serif;
`;

