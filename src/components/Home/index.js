import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hi, <br/> I'm Alex, <br/> a web developer.</h1>
        <h2>Full Stack Developer /  React Expert / Sass Experimenter </h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>
    </div>
  );
}

export default Home;