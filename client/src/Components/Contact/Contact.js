import React,{useState,useEffect} from 'react'
import { HrComponent } from '../HrComponents/HrComponent';

import Axios from 'axios'
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';  
import 'aos/dist/aos.css'
import './Contact.css'
import Aos from 'aos'


export const Contact = () => {
  
  useEffect(() => {
    Aos.init({
      anchorPlacement: 'top-bottom',
      delay:"10000ms",
      
    })
    
    
  },
  []);
  toast.configure()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
 
 
  const [addressp, setAddressp] =useState("");
  const [zip,setZip]=useState("")
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  
  const handleSubmit=()=>{
    
    Axios.post('https://himanshukherajani.herokuapp.com/api/Contact',
    {name:name,email:email,address:address,addressp:addressp,city:city,zip:zip  })
    .then(()=>{
      toast("Contact data has been saved Successfully");
    }).catch(()=>{
     toast(" Contact data has not been saved Successfully ")
    })
  }

    return (
        <div id="Contact" data-aos="zoom-in">
           <HrComponent h2={" Contact  "}/>
            <form className="row g-3 ">
  <div className="col-md-6">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Name</label>
    <input type="name" className="form-control" id="inputEmail4"
    value={name}
    onChange={(e) => setName(e.target.value)}
   required/>
  </div>
    <label for="inputEmail4" classNameName="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    />
  </div>
  
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"
    value={address}
    onChange={(e) => setAddress(e.target.value)}
     required
    />
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"
     value={addressp}
     onChange={(e) => setAddressp(e.target.value)}
     required
    />
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"
     value={city}
     onChange={(e) => setCity(e.target.value)}
     required
    />
  </div>
  
  <div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"
    value={zip}
    onChange={(e) => setZip(e.target.value)}
     required
    />
  </div>
  
  <div className="col-12">
    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Contact Us</button>
  </div>
</form>
        </div>
    )
}
