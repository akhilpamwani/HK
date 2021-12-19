import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import './DB.css'
import { HrComponent } from '../HrComponents/HrComponent'
import { Footer } from '../Footer/Footer'
import { NavData } from '../NavData/NavData'
export const DB = () => {
  const [getData, setGetData] = useState([])
 

  useEffect(()=>{
    Axios.get('https://himanshukherajani.herokuapp.com/api/DB')
    .then((response)=>{
setGetData(response.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[]);
  return (
    <>
    <NavData/>
    <div>
    <HrComponent h2={"Contact Database"}/>
                 <table className="table">
        <thead>
          <tr>
            
            <th  className="table-dark" scope="col">Name</th>
            <th  className="table-dark" scope="col">E-mail</th>
            <th  className="table-dark" scope="col">Address</th>
            <th  className="table-dark" scope="col">Address</th>
            <th  className="table-dark" scope="col">City</th>
            <th  className="table-dark" scope="col">ZipCode</th>

          </tr>
        </thead>
        <tbody>
        
             {getData.map((val,key)=>{
               return(
             <tr key={key}>
             
             <td>{val.name}</td>
             <td>{val.email}</td>
             <td>{val.address}</td>
             <td>{val.addressp}</td>
             <td>{val.city}</td>
             <td>{val.zip}</td>
           </tr>
        )})}
         
          
        </tbody>
      </table> 
      </div> 
  <Footer/>
    </>
  )
}
