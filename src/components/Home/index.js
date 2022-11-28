import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
//import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'
import Loader from 'react-loaders';


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ','A', 'l', 'e', 'x', '!']
  const jobArray = ['A', ' ','w', 'e','b', ' ', 'd','e','v','e','l','o','p','e','r', '.']
  const hiArray = ['H', 'i', ',']
  const imArray = ['I', "'", 'm']
  
  useEffect(() => {
    setTimeout(()=> {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  
  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
        <AnimatedLetters letterClass={letterClass}
        strArray={hiArray}
        idx={9} />
          <br/> 
          <AnimatedLetters letterClass={letterClass}
        strArray={imArray}
        idx={11} />
        <AnimatedLetters letterClass={letterClass}
        strArray={nameArray}
        idx={15} />
         <br/> <AnimatedLetters letterClass={letterClass}
        strArray={jobArray}
        idx={20} /></h1>
        <h2>Full Stack Developer /  React Expert / Sass Experimenter </h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>
      <Logo />
    </div>
    <Loader type='pacman' />
    </>
  );
}

export default Home;