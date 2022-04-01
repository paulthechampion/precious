import React from 'react'
import star from "../img/star.jpeg"
import Form from "./form"

export default function Contact() {
  return (
    <div className='contact-div'>
      <div className='contact-flex-div'>
          <div>
            <Form/>
          </div>
          <div>
            <img src={star} className='star'/>
          </div>
      </div>
    </div>
  )
}
