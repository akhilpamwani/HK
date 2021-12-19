// Importing Statements




const express =require ('express');
const router=express.Router();

const  ContactModel =require ("../Model/Contact/Contact")



router.get("/DB",async(req,res)=>{
   ContactModel.find({}, (err,result)=>{
        if (err) {
            res.send(err);
        } else {
            res.send(result)
        }
    });
    });

// Post Contact


router.post('/Contact',async(req,res,next)=>{
    const name=req.body.name;
    const email=req.body.email;
    const address=req.body.address;
    const addressp=req.body.addressp;
    const city=req.body.city;
    const zip=req.body.zip;
    const ABNData= new ContactModel({name:name,email:email,address:address,addressp:addressp,
        city:city,zip:zip});
    await
    ABNData.save();
    res.send("Your Data has been saved");
    }
    );

                                    
module.exports=router