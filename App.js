const express=require("express");
const app=express();
app.get("/",(res,resp)=>{
    resp.sendFile("./public/personalinfo.html",{root:__dirname})
});
app.listen(5000);