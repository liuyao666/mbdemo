var express = require("express");
var app = express();
var jwt = require("jsonwebtoken")

var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var uE = bodyParser.urlencoded({extended:false});

var connectionUsers = mongoose.model("users",{
    phone:String,
    password:String
})

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');

    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    next()
})
app.post("/register",uE,function(req,res){
    // 1.得到前端的值
    var userphone = req.body.userphone;
    var userpass = req.body.userpass;
    mongoose.connect("mongodb://127.0.0.1:27017/aaa",{useNewUrlParser:true},function(err){
        if(err){
            console.log("数据库连接失败")
            //数据库连接失败，给前端返回错误
            res.send({statue:502,message:"数据库连接失败"})
        }else{
            console.log("数据库连接成功");
            // 设置插入数据
            var users = new connectionUsers({
                phone:userphone,
                pass:userpass,
            })
            //开始插入
            users.save().then((ok)=>{
                console.log("数据插入成功");
                //把插入的数据返回给前台
                res.send({statue:200,message:"注册成功",data:{linkid:1,token:"成功的token"}})
            },()=>{
                res.send({status:200,message:"注册失败",data:{linkid:0}})
            }
            )
        }
    })
})
app.listen(9988)

