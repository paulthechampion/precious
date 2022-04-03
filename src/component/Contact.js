import React from 'react'
import star from "../img/star.jpeg"
import Form from "./form"
import moon from "../img/moon4.gif"
import { useMediaQuery } from 'react-responsive'


export default function Contact() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1085px)'
  })
  if(isDesktopOrLaptop){
    document.body.style.backgroundImage = "url('../img/moon2.gif')";
  }
  else {
    document.body.style.backgroundImage = "url('../img/moon4.gif')";
  }
  return (
    <div className='contact-div'>
      <div className='contact-flex-div'>
        {
          isDesktopOrLaptop?
          <>
            <div>
              <Form/>
            </div>
            <div>
              <img src={star} className='star'/>
            </div>
          </>
          :
          <>
            <div>
              <img src={star} className='star'/>
            </div>
            <div>
              <Form/>
            </div>
          </>

        }
          
      </div>
    </div>
  )
}
