import React,{useEffect} from 'react'
import Hk from "../Images/PhotoFirst.jpg";
import Hki from "../Images/PhotoSecond.jpg";
import './Portfolio.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { HrComponent } from '../HrComponents/HrComponent';

export const Portfolio = () => {

  useEffect(() => {
    Aos.init({
   anchorPlacement: 'top-bottom',
   delay:"10000ms",
   
   })
                               
                                  
   },
   []);
   
    return (
        <div id="Portfolio" >
          <HrComponent h2={"  Portfolio  "}/>
            <div className="row row-cols-1 row-cols-md-2 g-4">
  
  
  <div className="col">
    <div className="card"  data-aos="fade-down-right">
      <img src={Hk} className="card-img-top Port-Img" alt="..."/>
      
    </div>
  </div>
  <div className="col">
    <div className="card" data-aos="fade-down-left">
      <img src={Hki} className="card-img-top Port-Img" alt="..."/>
     
    </div>
  </div>
</div>
        </div>
    )
}
