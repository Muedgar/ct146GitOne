const express = require("express");
const authRoutes = require("./routes/authRoutes");
const appRoutes = require("./routes/appRoutes");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());


app.use(authRoutes);
app.use(appRoutes);



let LOGGEDIN = false;
let CURRENTROLE = false;

if(process.env.NODE_ENV=="production") {
    app.use(express.static(path.join(__dirname,'../ctui','build')));
    app.get('*', (req,res)=> {
        res.sendFile(path.resolve(__dirname,'../ctui','build','index.html'));
    }); 
}


app.get('/setLoggedIn/:role', (req,res)=> {
    LOGGEDIN = true;
    CURRENTROLE = req.params.role;
    res.status(201).json({status: "logged in"});
});

app.get('/getLoggedIn', (req,res)=> {
    res.status(200).json({status: LOGGEDIN, role: CURRENTROLE});
});

app.get('/removeLoggedIn', (req,res) => {
    LOGGEDIN = false;
    CURRENTROLE = false;
    res.status(201).json({status: "logged out"});
});

app.get('/logout',(req,res)=> {
    try {
        console.log("trying to log out...");
        res.clearCookie('jwt');
        res.redirect('/removeLoggedIn');
        res.status(100).json({status:"redirect to sign up"});
    }catch(error) {
        console.log(error.message);
    }
});


const PORT = process.env.PORT;
const MONGO = process.env.MONGO_URI;

const startApp =async (P,M) => {
    
       try {
           let conn =await mongoose.connect(M,{family:4},{ useNewUrlParser: true, useUnifiedTopology: true })
                    .then((result) => app.listen(P,()=>console.log("connected and server running...")))
                    .catch((err) => console.log(err));
       } catch (error) {
           
       }
}

startApp(PORT,MONGO);