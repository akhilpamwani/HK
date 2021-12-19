import React,{useEffect} from 'react'
import './About.css'
import Hk from "../Images/PhotoFirst.jpg"
import { HrComponent } from '../HrComponents/HrComponent';
import Aos from 'aos'
import 'aos/dist/aos.css'

export const About = () => {

  useEffect(() => {
    Aos.init({
   anchorPlacement: 'top-bottom',
   delay:"10000ms",
   
   })
                               
                                  
   },
   []);
    return (
      
        <div id="About" data-aos="fade-up">
          <HrComponent h2={"  About "}/>
            <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-6 p-2 bd-highlight" data-aos="fade-right">
      <img src={Hk} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-4" data-aos="fade-left">
      <div className="card-body">
        <h5 className="card-title">Himanshu Kherajani</h5>
        <p className="card-text">
         1. Name:-Himanshu Kherajani
           </p>
           <p className="card-text">
        2. Country:=India.
           </p>
           <p className="card-text">
        3. Birthday:-20 December,2004.
           </p>
           <p className="card-text">
        4. Age:-16 years.
           </p>
        
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
