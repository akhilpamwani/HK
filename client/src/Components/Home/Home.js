import React,{useEffect} from 'react';
import Hk from "../Images/PhotoSecond.jpg";
import Hki from "../Images/PhotoFirst.jpg";
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Home = () => {

  useEffect(() => {
    Aos.init({
   anchorPlacement: 'top-bottom',
   delay:"10000ms",
   
   })
                               
                                  
   },
   []);
    return (
        <div id="Home" data-aos="fade-down">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>

  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Hk} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Hki} className="d-block w-100" alt="..."/>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  
</div>
        </div>
    )
}
