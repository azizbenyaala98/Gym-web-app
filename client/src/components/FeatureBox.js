import React from 'react'
import '../pages/Landing.css'

function FeatureBox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image} alt='' />
        </div>
        <div className='a-b-text'>
            <h2> {props.title}</h2>
            <p>more details </p>
        </div>
    </div>
  )
}

export default FeatureBox