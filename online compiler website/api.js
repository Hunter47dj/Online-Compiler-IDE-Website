const express = require("express")
const app= express()
const bodyP= require("body-parser")
const compiler= require("compilex")
var hackerRank = require('machinepack-hackerrank');
const options= {stats: true}
compiler.init(options) 

app.use(bodyP.json())
app.use("/codemirror-5.65.16",express.static("./codemirror-5.65.16"))
app.get("/",function(req,res){
    compiler.flush(function(){
        console.log("deleted")
    })
    res.sendFile("C:/Users/DeLL/Desktop/PROJECTS/online compiler website/index.html")
})

app.post("/compile", function(req,res){
    var code=req.body.code
    var input=req.body.input
    var lang=req.body.lang

    try {
        if(lang=="Cpp"){
            if(!input){
                var envData = { OS : "windows" , cmd : "g++", options: { timeout: 10000}};       // from compilex 
                compiler.compileCPP(envData , code , function (data) {
                    if (data.output) {
                        res.send(data);
                        
                    } else {
                        res.send({output:"error"})
                    }

                });

            }
            else {
                                //from compilex
                var envData = { OS : "windows" , cmd : "g++", options: { timeout: 10000}}; 
                compiler.compileCPPWithInput(envData , code , input , function (data) {
                    if (data.output) {
                        res.send(data);
                        
                    } else {
                        res.send({output:"error"})
                    }
                });
            }
        } 
        else if(lang=="Java"){
            if(!input){
                                // from comilex
                var envData = { OS : "windows"}; 
                compiler.compileJava( envData , code , function(data){
                    if (data.output) {
                        res.send(data);
                        
                    } else {
                        res.send({output:"error"})
                    }
                });    
            }
            else {
                                //  from comilex
                var envData = { OS : "windows"}; 
                compiler.compileJavaWithInput( envData , code , input ,  function(data){
                    if (data.output) {
                        res.send(data);
                        
                    } else {
                        res.send({output:"error"})
                    }
                });
            }
        }
        else if(lang=="Python"){
            if(!input){
                                 //from comilex
                var envData = { OS : "windows"}; 
                compiler.compilePython( envData , code , function(data){
                    if (data.output) {
                        res.send(data);
                        
                    } else {
                        res.send({output:"error"})
                    }
                });    
            }
            else{
                            //from comilex
                var envData = { OS : "windows"}; 
                compiler.compilePythonWithInput( envData , code , input ,  function(data){
                    if (data.output) {
                        res.send(data);
                        
                    } else {
                        res.send({output:"error"})
                    }        
                });
            }
        } else if(lang=="Choose"){
            res.send({output:"please select language"})
        }
        
    } catch (e) {
        console.log("error")
    }
}) 

app.listen(8000)
