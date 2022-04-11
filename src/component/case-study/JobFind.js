import React from 'react'

import slide from "../../img/case-study/jobFinal1.png"
import process from "../../img/case-study/design process.png"
import typo from "../../img/case-study/jobtypo.png"
import flow from "../../img/case-study/jobProcess.png"
import final1 from "../../img/case-study/jobFinal2.png"
import final2 from "../../img/case-study/jobFinal1.png"
import wire from "../../img/case-study/jobWire.png"

import others1 from "../../img/case-study/lenisFinal1.png"
import others2 from "../../img/case-study/cryptoFinal1.png"
import others3 from "../../img/illus.png"
import others4 from "../../img/case-study/millerfinal.png"

export default function JobFind() {
  return (
    <div className='case-main-div'>
        <div className='zoomers'>
            <img src={slide} alt="case-study-slide" className='case-study-slide'/>
        </div>
        <section className='case-section'>
            <h1>
                Job Finds
            </h1>

            <div className='case-flex-div-1'>
                <div>
                    <h2 className='case-h2 case-h2-new slide-in from-left'>Project duration: 3 weeks</h2>
                </div>
                <div>
                    <h2 className='case-h2 case-h2-new slide-in from-right'>Tools used: Figma, Canvas and Invision</h2>
                </div>
            </div>

            <h2 className='case-h2 slide-in from-left'>Overview</h2>
            <p className='case-p fade-in'>
                Technology has change the job search culture, looking for a job the traditional 
                way is now outdated and unheard of. Job apps has now become a frequent and reliable 
                way to search for a job. Looking for a job and scheduling an interview is still extremely 
                hard, I decided to design a job finding app that can help people look for job quick easy, 
                schedule their interview, add take notes about their interview and get notifications before 
                their interview.
            </p>

            <h2 className='case-h2 slide-in from-left'>Goals</h2>
            <div className='case-p fade-in'>
                <ul>
                    <li className='slide-in from-left'>
                        My goal was to design an app where individuals can look for jobs (full & part time jobs) 
                        depending on location and know their hourly rates before applying.
                    </li>
                    <li className='slide-in from-right'>           
                        Create a feature where people can set up notification of their up coming interview. 
                    </li>
                    <li className='slide-in from-left'>
                        Create a feature where employees can put in their informations and experiences.
                    </li>
                    <li className='slide-in from-right'>
                        Create a feature where employees can schedule their interview
                    </li>
                </ul>
 
            </div>
            <div>
                <img src={process} alt="design process" className='design-process fade-in'/>
            </div>
            <h2 className='case-h2 slide-in from-left'>My Thought Process</h2>
            <p className='case-p fade-in'>
                Before I designed Job Finds I wanted to design something that can be used by anyone 
                and can help different users. I first taught about designing a fitness app then I 
                taught about creating a food delivery service. I finally decided on designing a job 
                search engine because there are very few known job search engines and a lot of 
                employees and employers. My primary colour theme was something I thought of when I thought 
                of creating a fitness app. My logo was decided based on the name of my app design. 
                I wanted an easy-to-read typography and I highlighted words that the users would 
                find important and would be focused on.
            </p>
            <h3 className='case-h3'>
                Theme
            </h3>

            <div>
                <img src={typo} alt="case typography fade-in" className='case-typo'/>
            </div>

            <h3 className='case-h3'>
                User Flow
            </h3>

            <div>
                <img src={flow} alt="User flow" className='case-flow job-flow fade-in'/>
            </div>

            <h3 className='case-h3'>
                Wire Frame
            </h3>
            <div>
                <img src={wire} alt="User flow" className='case-wire fade-in'/>
            </div>

            <h3 className='case-h3'>
                Final Desgin
            </h3>

            <div className='final-flex'>
                <div>
                    <a href="https://www.figma.com/proto/JpUn0M7I6MFPef5eGUpbEd/Job-finds?page-id=0%3A1&node-id=1%3A4&viewport=241%2C48%2C0.14&scaling=scale-down&starting-point-node-id=144%3A13" className='link-class ' target="_blank"><img src={final1} alt="final design" className='final-design fade-in'/></a>
                </div>
                
            </div>

            <h3 className='case-h3'>
                Others
            </h3>

            <div className='final-flex final-flex-last'>
                <div>
                    <a className='link-class' href="/case-study/millers"><img src={others4} alt="final design" className='final-design slide-in from-left'/></a>
                </div>
                <div>
                    <a className='link-class' href="/case-study/lenis"><img src={others1} alt="final design" className='final-design slide-in from-right'/></a>
                </div>
                <div>
                    <a className='link-class' href="/case-study/cryptocoin"><img src={others2} alt="final design" className='final-design slide-in from-left'/></a>
                </div>
                <div>
                    <a className='link-class' href="/case-study/illustration"><img src={others3} alt="final design" className='final-design slide-in from-right'/></a>
                </div>
            </div>
        </section>
        
    </div>
  )
}
