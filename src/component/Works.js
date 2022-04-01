import React from 'react'
import sase from "../img/case.png"

export default function works(props) {
  return (
        <div className="card" >
            <div className="card_inner" id="inner">
                <div className="card_face card_face-front">   
                    <img src={props.port.img} alt="project" className="portClass"/>
                    <div className='card-back'>
                            <h3 className='card-h3'>{props.port.h3}</h3>
                            <p className='card-p'>{props.port.p}</p>
                            <a href={props.port.link} className='card-link'><img src={sase} className='case'/>Case study</a>
                    </div>
                </div> 

            </div>
        </div>
  )
}
