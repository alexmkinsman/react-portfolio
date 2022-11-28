import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(()=> {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  
  return (
    <>
      <div className="container contact-page">
        <div className='text-zone'>
          <h1>
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={['C','o','n','t','a','c','t',' ','M','e']} 
              indx={15}
            />
          </h1>
          <p>
            If you have any questions not answered by this portfolio, 
            please feel free to let me know using the form below.
          </p>
          <div className='contact-form'>
            <form>
              <ul>
              <li className='half'> 
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className='half'> 
                  <input type="email" name="email" placeholder="Email" required />
                </li>
                <li> 
                  <input type="text" name="subject" placeholder="Subject" required />
                </li>
                <li> 
                  <textarea placeholder='Message' name="message" required ></textarea>
                </li>
                <li> 
                  <input type="submit" className='flat-button' value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact