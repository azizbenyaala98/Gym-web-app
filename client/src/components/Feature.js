import React from 'react';
import '../pages/Landing/Landing.css'
import FeatureBox from './FeatureBox';
import fimage1 from '../assets/1.svg';
import fimage2 from '../assets/2.svg';
import fimage3 from '../assets/3.svg';
import fimage4 from '../assets/4.svg';

function Feature() {
  return (
    <div id='features' >
      <h1> FEATURES</h1>
      <div className='a-container'>
        <FeatureBox image={fimage1} title="wheightLifting" />
        <FeatureBox image={fimage2} title="Specifc Muscle"/>
        <FeatureBox image={fimage3} title="Flex Your Muscle"/>
        <FeatureBox image={fimage4} title="Cardio Exercice"/>

      </div>
    </div>
  )
}

export default Feature