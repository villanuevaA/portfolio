import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import { SectionsContainer, Section, Header } from 'react-fullpage';
class App extends Component {
  render() {
    let options = {
      sectionClassName: 'section',
      anchors: ['Home', 'About', 'Works', 'Contact'],
      scrollBar: false,
      navigation: true,
      verticalAlign: false,
      activeClass: 'active',
      arrowNavigation: true
    };
    return (
      <div>
        <Header>
          <img src="" alt="logo"/>
          <a href="#Contact" className="Navs ">Contact</a>
          <a href="#Works" className="Navs">Works</a>
          <a href="#About" className="Navs">About</a>
          <a href="#Home" className="Navs active">Home</a>
        </Header>
        <SectionsContainer className="container" {...options}>
          <Section >
            <Home />
          </Section>
          <Section >
            <About />
          </Section>
          <Section>Page 3</Section>
          <Section>


          </Section>


        </SectionsContainer>
      </div>
    );
  }
}

export default App;
