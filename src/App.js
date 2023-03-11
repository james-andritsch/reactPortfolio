import './App.css';
import { useState } from 'react';
import Nav from './components/nav.js';
import Portfolio from './components/portfolio';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Resume from './components/resume';

const options = [
  {
    name: "About Me",
    link: "/about-me"
  },
  {
    name: "Portfolio",
    link: "/portfolio"
  },
  {
    name: "Resume",
    link: "/resume"
  }
]

const projects = [
  {
    name: "",
    github: "",
    live: "",
    picture: require('')
  },
  {
    name: "",
    github: "",
    live: "",
    picture: require('')
  },
  {
    name: "",
    github: "",
    live: "",
    picture: require('')
  },
  {
    name: "",
    github: "",
    live: "",
    picture: require('')
  },
  {
    name: "",
    github: "",
    live: "",
    picture: require('')
  },
  {
    name: "",
    github: "",
    live: "",
    picture: require('')
  },
  {
    name: "",
    github: "",
    live: "",
    picture: require('')
  },
]

const avatar = {
  alt: 'avatar of James Andritsch',
  picture: require('./assets/')
}


export default App;
