
const express = require("express");
const mysql = require("mysql2");

const app = express();

let port=3000;

const db=mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"",
    database:"foodshop",
    port:3306,

});
db.connect((err)=>{
    
    if (err)
    {
      console.log(err,"error");

    
    }
    else 
    {
      console.log("myrmc database");
}

 });

 app.get('/:id',(req,res)=>{
    let id=req.params.id;
    let qry='SELECT * FROM `foodmenu` WHERE id= "'+id+'"';
   db.query(qry,(err,result)=>{
      if(err){
        console.log(err,"error")
      }
      if(result.length>0){
       res.send({status:true,msg:"database connected",data:result })
      }
      else
      {
        res.send({status:false,msg:"failed"})
      }

    });


});
  

        app.listen(port,()=>{
          console.log("the server is running");
        });

      