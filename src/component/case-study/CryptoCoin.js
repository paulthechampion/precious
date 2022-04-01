import React from 'react'

import slide from "../../img/case-study/cryptoFinal2.png"
import process from "../../img/case-study/design process.png"
import typo from "../../img/case-study/cryptotypo.png"
import flow from "../../img/case-study/cryptoProcess.png"
import final1 from "../../img/case-study/cryptoFinal1.png"
import final2 from "../../img/case-study/cryptoFinal2.png"
import wire from "../../img/case-study/cryptoWire.png"

import others1 from "../../img/case-study/jobFinal2.png"
import others2 from "../../img/case-study/lenisFinal2.png"
import others3 from "../../img/illus.png"
import others4 from "../../img/case-study/millerfinal.png"

export default function CryptoCoin() {
  return (
    <div>
        <div className='zoomers crypto-slide'>
            <img src={slide} alt="case-study-slide" className='case-study-slide'/>
        </div>
        <section className='case-section crypto-section'>
            <h1>
                Crypto Coin
            </h1>

            <div className='case-flex-div-1'>
                <div>
                    <h2 className='case-h2'>Project duration: 8 weeks</h2>
                </div>
                <div>
                    <h2 className='case-h2'>Tools used: Figma, Canvas and Invision</h2>
                </div>
            </div>

            <h2 className='case-h2'>Overview</h2>
            <p className='case-p'>
                Ever since bitcoin exploded the rise of crypto investment has increased immensely. 
                People have looked for a way to buy and sell the next big crypto. Crypto has craved 
                the way and created opportunities for so many individuals. I created a design where new 
                and old investors, and every day people can buy and sell crypto currency easily.
            </p>

            <h2 className='case-h2'>Goals</h2>
            <div className='case-p'>
                <ul>
                    <li>
                        Create a news feature where people can read about the latest update of any crypto coin.
                    </li>
                    <li>           
                        Create a feature where users can add their preferred coins to a watchlist and get price update daily. 
                    </li>
                </ul>
              
            </div>

            <div>
                <img src={process} alt="design process" className='design-process'/>
            </div>
            <h2 className='case-h2'>My Thought Process</h2>
            <p className='case-p'>
                During the beginning of my project, my first thought was to create a cryptocurrency 
                app that could be done by either a novice or an expert. I decided to add a News feature to 
                help users research easier and for users to understand and learn more about their current or 
                future investments. Before creating a wireframe I did a couple of research on apps like Coinbase, 
                Binance, Crypto.com and wealth simple, I discovered one major similarity in their designs (the age limit) 
                this discovery lead me to a verification page where users have to input their date of birth and agree 
                that they are 18 and above. Another feature I discovered was the payment method, I decided to create 
                a feature where users can add different payment methods like Paypal, Debit/Credit Cards, Apple 
                pay etc. My logo was something I thought of during my design process, I wanted a logo that was visually applealing and 
                also represents my app design. my final design was based on research, inspiration and my ideas.
            </p>
            <h3 className='case-h3'>
                Theme
            </h3>

            <div>
                <img src={typo} alt="case typography" className='case-typo'/>
            </div>

            <h3 className='case-h3'>
                User Flow
            </h3>

            <div>
                <img src={flow} alt="User flow" className='case-flow'/>
            </div>

            <h3 className='case-h3'>
                Wire Frame
            </h3>
            <div>
                <img src={wire} alt="User flow" className='case-wire'/>
            </div>

            <h3 className='case-h3'>
                Final Desgin
            </h3>

            <div className='final-flex'>
                <div>
                    <a href="https://www.figma.com/proto/kwxd6PoEVjnddQ3FvuQ5fO/crypto-coin?page-id=0%3A1&node-id=2%3A22&viewport=241%2C48%2C0.36&scaling=scale-down&starting-point-node-id=2%3A2" className='link-class' target="_blank"><img src={final1} alt="final design" className='final-design'/></a>
                </div>
                <div>
                    <a href="https://www.figma.com/proto/kwxd6PoEVjnddQ3FvuQ5fO/crypto-coin?page-id=0%3A1&node-id=2%3A22&viewport=241%2C48%2C0.36&scaling=scale-down&starting-point-node-id=2%3A2" className='link-class' target="_blank"><img src={final2} alt="final design" className='final-design'/></a>
                </div>
            </div>

            <h3 className='case-h3'>
                Others
            </h3>

            <div className='final-flex final-flex-last'>
                <div>
                    <a className='link-class' href="/case-study/jobfinds"><img src={others1} alt="final design" className='final-design'/></a>
                </div>
                <div>
                    <a className='link-class' href="/case-study/lenis"><img src={others2} alt="final design" className='final-design'/></a>
                </div>
                <div>
                    <a className='link-class' href="/case-study/millers"><img src={others4} alt="final design" className='final-design'/></a>
                </div>
                <div>
                    <a className='link-class' href="/case-study/illustration"><img src={others3} alt="final design" className='final-design'/></a>
                </div>
            </div>
        </section>
        
    </div>
  )
}
