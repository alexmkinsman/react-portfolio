import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(()=> {
      return setLetterClass('text-animate-hover')
    }, 4000)
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
    </div>
  )
}

export default About