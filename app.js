const express = require("express");
const authRoutes = require("./ctserver/routes/authRoutes");
const appRoutes = require("./ctserver/routes/appRoutes");
const problemSolving = require("./ctserver/routes/problemSolvingRoutes");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const swaggerUI = require("swagger-ui-express");
const docs = require("./ctserver/docs");
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());


app.use(authRoutes);
app.use(appRoutes);
app.use(problemSolving);

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs));


let LOGGEDIN = false;
let CURRENTROLE = false;


    app.use(express.static(path.join('ctui','build')));
    



app.get('/setLoggedIn/:role', (req,res)=> {
    LOGGEDIN = true;
    CURRENTROLE = req.params.role;
    res.status(201).json({status: "logged in"});
});

app.get('/getLoggedIn', (req,res)=> {
    console.log("getting called for checking currently logged in");
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
         res.status(200).json({status:"redirect to sign up"});
    }catch(error) {
        console.log(error.message);
    }
});


app.get('*', (req,res)=> {
    res.sendFile(path.join(__dirname,'ctui','build','index.html'));
}); 

const PORT = process.env.PORT;
const MONGO = process.env.MONGO_URI;

const startApp =async (P,M) => {
    
       try {
           let conn =await mongoose.connect(M,{family:4},{ useNewUrlParser: true, useUnifiedTopology: true })
                    .then((result) => app.listen(P,()=>console.log("connected and server running... http://localhost:"+P)))
                    .catch((err) => console.log(err));
       } catch (error) {
           
       }
}

startApp(PORT,MONGO);