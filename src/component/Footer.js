import React from 'react'

import linkedin from "../img/linkedin.png"
import behance from "../img/behance.png"
import dribble from "../img/dribble.png"
import twitter from "../img/twitter (2).png"

export default function () {
  return (
    <footer>
        <div className='footer-flex'>
            <div>
                <p className='footer-bottom-margin'>
                    Social media
                </p>
                <a href="https://www.behance.net/preciousenwerem" target="_blank"><img src={behance} alt="socials-logo" className='socials-logo socials-logo-first'/></a>
                <a href="https://www.linkedin.com/in/precious-enwerem-246871170" target="_blank"><img src={linkedin} alt="socials-logo" className='socials-logo'/></a>        
                <span className='dribble-top'><a href="https://dribbble.com/preciousenwerem" target="_blank"><img src={dribble} alt="socials-logo" className='socials-logo dribble'/></a></span>      
                <a href="https://twitter.com/preciousenwere9" target="_blank"><img src={twitter} alt="socials-logo" className='socials-logo'/></a>
            </div>
            <div>
                <p className='footer-bottom-margin'>
                    Contact me
                </p>
                <p>
                   <a href="tel:+1(437)928-7832" className='link-class'>4379287832</a> 
                </p>
                <a href='mailto: enweremprecious16@gmail.com' className='link-class'>
                    enweremprecious16@gmail.com
                </a>
            </div>
        </div>
        <div className='copyright'>
            © Precious Enwerem 2022 
        </div>
    </footer>
  )
}
