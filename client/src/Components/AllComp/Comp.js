import React from 'react'
import { About } from '../About/About'
import { Contact } from '../Contact/Contact'
import { Home } from '../Home/Home'
import { Nav } from '../NavBar/Nav'
import { Portfolio } from '../Portfolio/Portfolio'
import { Footer } from '../Footer/Footer';

export const Comp = () => {
    
    return (
        <>
            <Nav/>
            <Home/>
            <About/>
            <Portfolio  />
            <Contact />
            <Footer/>
        </>
    )
}
