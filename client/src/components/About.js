import React from 'react'
import '../pages/Landing.css'
import aboutimage from '../assets/about.png'
function About() {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage} alt=''/>

        </div>
        <div className='about-text'>
            <h1> LEARN ABOUT US </h1>
            <p> zejfoijzeefiojzifjzeoifjzoiefjh
                zfkjhzekfjpozjefopkz efzpo
                efijpoze fzf </p>
                <button> READ MORE </button>

        </div>
    </div>
  )
}

export default About