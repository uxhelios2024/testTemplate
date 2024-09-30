import React from 'react'
import '../styles/WelcomePage.scss'

function WelcomePage() {
  return (
    <div className='welcomePageCont'>
        {/*<h1>we value creativity.</h1>*/}
        <h1>Foundation for support</h1>
        <div className='bookBtn'>
          <p>Donate</p>
        </div>
        <img src="/images/glow4.png" alt="glow" className='glow1'/>
    </div>
  )
}

export default WelcomePage