import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['A', 'd', 'a', 'm', '.']

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page" id="home">
        <div className="text-zone">
          <h2>
            Hello, my name is
          </h2>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
          </h1>
          <h2>I am a software engineer with a passion for data collection and data processing. Currently I have several independent projects in the works for FFXIV and Discord.</h2>
          <ScrollLink to="contact" spy={true} smooth={true} offset={0} duration={500} className="flat-button">
            CONTACT ME
          </ScrollLink>
        </div>
      </div>
    </>
  )
}

export default Home