import React from 'react'
import Works from "./Works"

import lenis from "../img/lenis.png"
import crypto from "../img/crypto.png"
import job from "../img/job.png"
import illus from "../img/illus.png"

export default function Home() {
  return (
    <div className='home'>
        <div className='works-div'>
            <Works port={{img: lenis , link:"/case-study/lenis",
                p:"E-commerce shopping app", 
                h3:"Lenis"}}
            />

            
            <Works port={{img: crypto , link:"/case-study/cryptocoin",
                            p:"Cryptocurrency exchange platform", 
                            h3:"CRYPTO  COIN"}}
                        />

            {/* <Works port={{img: crypto , link:"/case-study/millers",
                            p:"Cleaning service", 
                            h3:"Miller’s Cleaning Services"}}
                        /> */}

            <Works port={{img: job , link:"/case-study/jobfinds",
                            p:"Job search engine", 
                            h3:"Job Finds"}}
                        />

            <Works port={{img: illus , link:"/case-study/illustration",
                            p:"Creative illustrations made and designed by me", 
                            h3:"Illustration"}}
            />
        </div>
    </div>
  )
}
