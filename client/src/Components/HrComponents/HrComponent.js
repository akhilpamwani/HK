import React from 'react'
import './HrComponent.css'
export const HrComponent = (props) => {
    return (
        <>
           <hr className="HR"/>
        <hr className="HR"/>
        <h2 className="Blood-H1">{props.h2}</h2>
        <hr className="HR"/>
        <hr className="HR"/>  
        </>
    )
}
