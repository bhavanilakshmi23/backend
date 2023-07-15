const express= require('express');
const mysql=require('mysql');
const cors=require('cors');

const app=express();

app.use(cors());
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud"
})
app.post('./login',(req,res)=>{
    const sql="SELECT * from login Where username=? AND password=?";
    const values=[
        req.body.email,
        req.body.password
    ]
    db.query(sql,[values],(err,data)=>{
        if(err)return res.json("Login Failed")
        return res.json(data);
    })
})
app.listen(3000,()=>
{
    console.log("listening..");
})