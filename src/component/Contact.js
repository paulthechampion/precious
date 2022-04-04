import React,{useEffect} from 'react'
import star from "../img/star.jpeg"
import Form from "./form"
import moonLap from "../img/moon2.gif"
import moonPh from "../img/moon4.gif"
import { useMediaQuery } from 'react-responsive'


export default function Contact() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1085px)'
  })
  var bodyStyle = document.body.style
  var bodyAfter = window.getComputedStyle(
    document.querySelector('body'), ':after'
  ).getPropertyValue('background')
  
  useEffect(()=>{
    if(isDesktopOrLaptop){
      // document.body.style.backgroundColor  = 'red';
      bodyStyle.setProperty('--test',"url(" + moonLap + ")" + " center center" )
      // bodyStyle.backgroundImage = "url(" + moonLap + ")";
    }
    else {
      bodyStyle.setProperty('--test',"url(" + moonPh + ")" + " center center" )
      // bodyStyle.backgroundImage = "url(" + moonPh+ ")";
      
    }
  },[])
  
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
