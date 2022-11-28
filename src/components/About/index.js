import './index.scss';
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
  return (
    <div className='containter about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
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