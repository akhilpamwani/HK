import React from 'react'
import "./Footer.css";
import  Instagram  from "./Intagram.jpg";

import  Twitter  from "./twiitter.jpg";
import  Facebook  from "./Facebook.jpg";
import logo from '../NavBar/logo.jpg'

import { NavLink } from 'react-router-dom';
export const Footer = () => {
    return ( 
        <>
          <section className="Footer">
              <div className="Footer-Items">
              <NavLink className="Footer-h3" to="/"><img  className="Footer-h3" src={logo}/></NavLink>

              <p className="Footer-Para">All     &copy;       Copyright Reservered</p>
            <div className="Social-Links">
              <a href="https://www.instagram.com/himanshu_khe"><img src={Instagram} alt="" srcset="" className="Icons" /></a>

           <a href="https://twitter.com/Himanshu_khe"><img src={Twitter} alt="" srcset="" className="Icons"  /></a>
           
           <a href="https://m.facebook.com/100017828372053/ "><img src={Facebook} alt=""className="Icons"  /></a>
           </div>
              </div>
              </section>  
        </>
    )
}
