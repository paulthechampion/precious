import React,{useEffect}  from 'react'
import Works from "./Works"
import lenis from "../img/lenis.png"
import crypto from "../img/crypto.png"
import job from "../img/job.png"
import illus from "../img/illus.png"
import { useMediaQuery } from 'react-responsive'
import moonLap from "../img/moon.gif"
import moonPh from "../img/moon3.gif"
import astro from "../img/astro.png"


export default function Home() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1085px)'
      })
      var bodyStyle = document.body.style
      
      
    
    useEffect(()=>{
        if(isDesktopOrLaptop){
          // document.body.style.backgroundColor  = 'red';
          bodyStyle.setProperty('--test',"url(" + moonLap + ")" + " center center" )
        //   bodyStyle.backgroundImage = "url(" + moonLap + ")";
          
        }
        else {
            
          bodyStyle.setProperty('--test',"url(" + moonPh + ")" + " center center" )
        //   bodyStyle.backgroundImage = "url(" + moonPh+ ")"

        }
      },[])
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
        <div id='wrapper'>
            <div id='float'>
            <div className='astronaut'><a href="https://www.figma.com/file/HeyF8bshTePBW37t8GYV97/PORTFOILO?node-id=327%3A1855" className='link-class-two' target="_blank"><img src={astro}/></a></div>
            {/* <!--<div class='floatin'>Access Trumps Ownership</div>
            <div class='behind'>Access Trumps Ownership</div>-->
            <!--<div class='bg'>Access Trumps Ownership</div>--> */}
            </div>
        </div>
    </div>
  )
}
