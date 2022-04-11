import React from 'react'

import slide from "../../img/case-study/lenisSlide.png"
import process from "../../img/case-study/design process.png"
import typo from "../../img/case-study/lenistypo.png"
import flow from "../../img/case-study/lenisflow.png"
import final1 from "../../img/case-study/lenisFinal1.png"
import final2 from "../../img/case-study/lenisFinal2.png"
import wire from "../../img/case-study/lenisWire.png"

import others1 from "../../img/case-study/cryptoFinal1.png"
import others2 from "../../img/case-study/jobFinal2.png"
import others3 from "../../img/illus.png"
import others4 from "../../img/case-study/millerfinal.png"

export default function Lenis() {
  return (
    <div>
        <div className='zoomers'>
            <img src={slide} alt="case-study-slide" className='case-study-slide'/>
        </div>
        <section className='case-section'>
            <h1>
                Lenis
            </h1>

            <div className='case-flex-div-1'>
                <div>
                    <h2 className='case-h2 slide-in from-left'>Project duration: 4 weeks</h2>
                </div>
                <div>
                    <h2 className='case-h2 slide-in from-right'>Tools used: Figma, Canvas and Invision</h2>
                </div>
            </div>

            <h2 className='case-h2 slide-in from-left'>Overview</h2>
            <p className='case-p fade-in'>
                The need of mobile shopping apps has reached an all time high due to the pandemic, 
                but there are very few apps to satisfy consumers needs. I decided to design a simple 
                yet diverse and innovative shopping app.
            </p>

            <h2 className='case-h2 slide-in from-left'>Problems</h2>
            <p className='case-p fade-in'>
                For the past two years the lockdown has affected people in tremendous ways, people have 
                not been able to shop the traditional way and have had to rely on online shopping. With 
                few easy to navigate shopping apps, online shopping has been hard for those who are not 
                technologically savvy. There is also a huge gap in non-binary clothing with has affected 
                a group of minorities severely and I intented to significantly reduces this gap with my design.
            </p>
            
            <h2 className='case-h2 slide-in from-left'>Solution</h2>
            <p className='case-p fade-in'>
                I decided to tackle this problem by designing an app that is sufficient and diverse. I 
                designed a clothing app for all ages, gender, race and non-binary individuals. 
            </p>

            <div>
                <img src={process} alt="design process" className='design-process'/>
            </div>

            <h2 className='case-h2 slide-in from-left'>My Thought Process</h2>
            <p className='case-p fade-in'>
                Looking for a name was one of the hardest parts of designing this website, I had a 
                lot of name options but couldn't decide which name would suit my design so I decided 
                to narrow it down to three options (Kazz, Domclothings and Lenis), I couldn't decide what 
                name would attract the users and better suit my design so I designed to get my target 
                audience involved. I asked different people to select their preferred name, 64% preferred 
                Lenis and 36% preferred Kazz. My clour theme(black and white) was selected because I did 
                not want a clash in clour and I wanted something simple. During my research, I found inspiration 
                from similar apps like Fashionova, Shein, Cider, pretty little things, zaful and designs on Pinterest, 
                Behance, Dribble and Google.
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
                <img src={flow} alt="User flow" className='case-flow fade-in'/>
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
                    <a href="https://www.figma.com/proto/DjZANabRxXQ12uMdIG1S9C/Lenis?page-id=333%3A2&node-id=377%3A366&viewport=241%2C48%2C0.15&scaling=scale-down&starting-point-node-id=333%3A8" className='link-class' target="_blank"><img src={final1} alt="final design" className='final-design slide-in from-left'/></a>
                </div>
                <div>
                    <a href="https://www.figma.com/proto/DjZANabRxXQ12uMdIG1S9C/Lenis?page-id=0%3A1&node-id=178%3A220&starting-point-node-id=41%3A643" className='link-class' target="_blank"><img src={final2} alt="final design" className='final-design slide-in from-right'/></a>
                </div>
            </div>

            <h3 className='case-h3'>
                Others
            </h3>

            <div className='final-flex final-flex-last'>
                <div>
                    <a className='link-class' href="/case-study/cryptocoin"><img src={others1} alt="final design" className='final-design slide-in from-left'/></a>
                </div>
                <div>
                    <a className='link-class' href="/case-study/millers"><img src={others4} alt="final design" className='final-design slide-in from-right'/></a>
                </div>
                <div>
                    <a className='link-class' href="/case-study/jobfinds"><img src={others2} alt="final design" className='final-design slide-in from-left'/></a>
                </div>
                <div>
                    <a className='link-class' href="/case-study/illustration"><img src={others3} alt="final design" className='final-design slide-in from-right'/></a>
                </div>
            </div>
        </section>
        
    </div>
  )
}


