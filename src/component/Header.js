import React, { useState } from 'react'
import useDocumentScrollThrottled from './scrollFunction'
import { useMediaQuery } from 'react-responsive'
import { PDFReader,MobilePDFReader } from 'react-read-pdf';
import { Document, Page} from 'react-pdf/dist/esm/entry.webpack';
//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`



import precious from "../img/precious.png"
import resume from "../img/precious-resume.pdf"

export default function Header() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1085px)'
      })
    
    const [showMenu, setShowMenu]= useState(false)
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    let navClasses = "header-second-div"
    let iconClass = "fas fa-angle-down"
    if(showMenu){
        console.log("open")
        navClasses = "header-second-div open"
        iconClass = "fas fa-angle-up"
        
    }
    else {
        console.log("close")
    }
    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowShadow, setShouldShowShadow] = useState(false);
  
    const MINIMUM_SCROLL = 50;
    const TIMEOUT_DELAY = 50;
  
    useDocumentScrollThrottled(callbackData => {
      const { previousScrollTop, currentScrollTop } = callbackData;
      const isScrolledDown = previousScrollTop < currentScrollTop;
      const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
  
      setShouldShowShadow(currentScrollTop > 2);
  
      setTimeout(() => {
        setShouldHideHeader(isScrolledDown && isMinimumScrolled);
      }, TIMEOUT_DELAY);
    });
  
    const shadowStyle = shouldShowShadow ? 'shadow' : '';
    const hiddenStyle = shouldHideHeader ? 'hidden' : '';

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }
    

    return (
        <header>
            <div className={`header-first-div ${shadowStyle} ${hiddenStyle}`}>
                <div className='first-header-bottom'>
                    <ul className='header-ul'>
                        <li>
                            <a href="/" className='header-link-1'>Works</a>
                        </li>

                        <li>
                        <i className={iconClass} onClick={()=>setShowMenu(!showMenu)}></i>
                        </li>

                        <li>
                            <a href="/contact" className='header-link-1'>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={navClasses}>
                <div className='header-second-div-one'>
                    <div>
                        <img src={precious} alt="display-pic" className='display-pic'/><br/>
                        <a href="https://www.linkedin.com/in/precious-enwerem-246871170" className='header-link'>Linked In</a><br/>
                        <a href='mailto: enweremprecious16@gmail.com' className='header-link'> enweremprecious16@gmail.com</a><br/>
                        <a href='tel:+1(437)928-7832' className='header-link'> +1(437)928-7832</a><br/>
                    </div>
                    <div>
                        <h1 className='header-second-h1'>
                            Precious Enwerem
                        </h1>
                        <h3 className='header-second-h3'>
                            UX/UI Designer
                        </h3>
                        <p>
                            A highly creative and innovative UI/UX designer based in Toronto, 
                            Canada with the determination to learn and enhance my design sense. 
                            I aim to help clients achieve their goal and create meaningful experience 
                            and opportunity through my designs.
                        </p>
                    </div>
                </div>
                <div className='resume-div'>
                    <h2><span>Resume</span></h2>
                    {isDesktopOrLaptop?
                        <PDFReader url={resume}/>
                    :   <div  style={{overflow:'scroll',height:600}}>
                            <Document file={resume} onLoadSuccess={onDocumentLoadSuccess} className renderMode='svg'>
                                <Page pageNumber={pageNumber} />
                            </Document>
                            {/* <p>
                                Page {pageNumber} of {numPages}
                            </p> */}
                        </div>
                    }
                    <div className='header-last-div'>
                        <div className='download'>
                            <a href={resume} target="_blank">Download Complete Resume</a>
                        </div>
                        <div className='last-word'>
                            <p>“ The next big thing is the one that makes the last big thing usable”</p>
                            <p>-Blake Ross</p>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </header>
  )
}
