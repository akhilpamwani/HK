// Importing all the required things


const express =require('express')
const cors =require('cors')
const mongoose =require('mongoose')
const Routes =require('./routes/routes')
const dotenv = require( 'dotenv')
const path = require("path");
// Enviroment variable initialised

dotenv.config({path:'./config.env'})

// Cpp and Port Initialisation

const app=express();

const PORT = process.env.PORT || 5000;




// Mongodb Connection 

  
mongoose.connect(process.env.DATABASE,{
  useNewUrlParser: true,
 
  useUnifiedTopology: true,
  
  

  
})
.then(() => console.log("MongoDB is connected"))
.catch((err) => console.log(err));



// Using all the delared thing


app.use(express.json());
app.use(cors());

//  Deploying Static 

if(process.env.NODE_ENV == "production"){
  app.use(express.static("./client/build"));
  const path = require("path");
  app.get("*", (req, res) => {`enter code here`
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

  })
}


      
// Runnning the Server

app.use('/api',Routes)
app.listen(process.env.PORT,()=>{
    console.log(`Server running sucessfully`)
})
