import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(()=> {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className='containter about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A','b','o','u','t',' ','m','e']}
            idx={15}
          />
        </h1>
        <p>This is not a drill.</p>
        <p>I am a web developer.</p>
        <p>And I need a job.</p>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className='faced3'>
            <FontAwesomeIcon icon={faCss3} color="#28A4B9" />
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faGitAlt} color="#EC4B28" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About