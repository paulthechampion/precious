import React from 'react'

import slide from "../../img/case-study/millerslide.png"
import process from "../../img/case-study/design process.png"
import typo from "../../img/case-study/millertypo.png"
import flow from "../../img/case-study/millerflow.png"
import final1 from "../../img/case-study/millerfinal.png"
import wire from "../../img/case-study/jobWire.png"

import others1 from "../../img/case-study/lenisFinal1.png"
import others2 from "../../img/case-study/cryptoFinal1.png"
import others3 from "../../img/illus.png"
import others4 from "../../img/case-study/jobFinal2.png"

export default function Millers() {
  return (
    <div>
        <div className='zoomers'>
            <img src={slide} alt="case-study-slide" className='case-study-slide'/>
        </div>
        <section className='case-section miller-section'>
            <h1>
                Miller’s Luxury Cleaning 
            </h1>

            <div className='case-flex-div-1'>
                <div>
                    <h2 className='case-h2 case-h2-new'>Project duration: 3 weeks</h2>
                </div>
                <div>
                    <h2 className='case-h2 case-h2-new'>Tools used: Figma, Canvas and Invision</h2>
                </div>
            </div>

            <h2 className='case-h2'>Overview</h2>
            <p className='case-p'>
                In my search for a new project I discovered Miler’s  Luxury 
                Cleaning and I decided to redesign the website to create a better 
                user experience.
            </p>

            <h2 className='case-h2'>Goals</h2>
            <div className='case-p'>
                <ul>
                    <li>
                        Rebuild the information architecture for the website to meet users needs
                    </li>
                    <li>           
                        Redesign website the lines with the brand’s identity 
                    </li>
                    <li>
                        Make bookings easier and faster
                    </li>
                    
                </ul>

            </div>
            <div>
                <img src={process} alt="design process" className='design-process'/>
            </div>
            <h2 className='case-h2'>My Thought Process</h2>
            <p className='case-p'>
                To redesign Miller’s Luxury Cleaning I had to research the company and understand 
                the ins and outs of their current website. I began to study the colour, images, icons 
                and typography used on the website, I also began to study the various tabs and their uses.
                When creating my design I decided to combine the home and about me tab and I also changed the 
                colour theme and typography to better suit the company's name and ideas. I also decided to 
                place a “Book Now” feature on the header of every page to make it easier for users to book a 
                cleaning appointment quickly and easily. I wanted to create a design that was different from 
                the company's website but still hard some similarities and represents the company’s values.
            </p>
            <h3 className='case-h3'>
                Theme
            </h3>

            <div>
                <img src={typo} alt="case typography" className='case-typo miller-typo'/>
            </div>

            <h3 className='case-h3'>
                User Flow
            </h3>

            <div>
                <img src={flow} alt="User flow" className='case-flow job-flow'/>
            </div>


            <h3 className='case-h3'>
                Final Desgin
            </h3>

            <div className='final-flex'>
                <div>
                    <a href="https://www.figma.com/proto/JpUn0M7I6MFPef5eGUpbEd/Job-finds?page-id=0%3A1&node-id=1%3A4&viewport=241%2C48%2C0.14&scaling=scale-down&starting-point-node-id=144%3A13" className='link-class' target="_blank"><img src={final1} alt="final design" className='final-design'/></a>
                </div>
            </div>

            <h3 className='case-h3'>
                Others
            </h3>

            <div className='final-flex final-flex-last'>
                <div>
                    <a className='link-class' href="/case-study/lenis"><img src={others1} alt="final design" className='final-design'/></a>
                </div>
                <div>
                    <a className='link-class' href="/case-study/cryptocoin"><img src={others2} alt="final design" className='final-design'/></a>
                </div>
                <div>
                    <a className='link-class' href="/case-study/jobfinds"><img src={others4} alt="final design" className='final-design'/></a>
                </div>
                <div>
                    <a className='link-class' href="/case-study/illustration"><img src={others3} alt="final design" className='final-design'/></a>
                </div>
            </div>
        </section>
        
    </div>
  )
}
