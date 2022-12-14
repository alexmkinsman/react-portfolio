import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(()=> {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_aw7s8fw',
        'template_mgoq53t',
        refForm.current,
        '8pzceHGrVUM8T3x2F'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again.')
        }
      )
  }
  
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
            <form ref={refForm} onSubmit={sendEmail}>
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
        <div className='info-map'>
          Alexandra Kinsman,
          <br />
          United States
          <br />
          9205 Questor Place
          <br />
          San Diego, CA, 92108
          <br />
          <span>akinsman825@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[32.7872745, -117.1250506]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[32.7872745, -117.1250506]}>
              <Popup>Alex lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact