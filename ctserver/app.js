const express = require("express");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

app.get('/logout',async(req,res)=> {
    // delete currently logged in db.
    console.log("logging out");
   res.cookie('jwt',' ', {maxAge: 1});
    res.status(200).json({status: "logged out"});
});

app.get('/oneUserInformation/:id',async(req,res)=> {
    // get user info and attach it to the result.
    try {
        const id = req.params.id;
        const user = await User.findOne({id});
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(401).json({status: "failed to retrieve one user"});
    }
});

app.put('/updateUserInformation/:id', async(req,res)=> {
    try {
        const id = req.params.id;
        const {insurancefrom,insuranceto,scheduledate,hourschedule,hqaddress} = req.body;
        const user = await User.findOneAndUpdate({_id: id},{insurancefrom,insuranceto,scheduledate,hourschedule,hqaddress},{new:true});
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(401).json({status: "failed to retrieve one user"});
    }
});
app.use(authRoutes);

const PORT = process.env.PORT;
const MONGO = process.env.MONGO_URI;

const startApp =async (P,M) => {
    
       try {
           let conn =await mongoose.connect(M,{family:4},{ useNewUrlParser: true, useUnifiedTopology: true })
                    .then((result) => app.listen(P,'127.0.0.1',()=>console.log("connected and server running...")))
                    .catch((err) => console.log(err));
       } catch (error) {
           
       }
}

startApp(PORT,MONGO);