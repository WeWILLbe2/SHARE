const express = require('express');
const mysql = require("mysql");
const bodyParser = require('body-parser');
const app = express();

// 建立数据库,连接
let mydb = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "share"
})
mydb.connect();
// 跨域处理

app.use(require('./Tools/cors').cors);
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    next();
});

//parse content-type   application/x-www-form-urlencoded

app.use(bodyParser.json());
app.use(function (req, res, next) { //允许跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    next();
})

app.post("/regist", function (req, res) {
    // console.log(req.body);
    var sql = "select * from user where account='" + req.body.name + "'";
    mydb.query(sql, function (err, results) {
        if (err) {
            console.log(err);
            return;
        }
        // console.log(results);

        if (results.length > 0) {
            res.json({
                msg: "username_has_exited"
            })
        } else {
            let newsql = `insert into user(account,password,nickname) values('${req.body.name}','${req.body.passW}','${req.body.nickname}')`
            mydb.query(newsql, function (err, results) {
                if (err) {
                    console.log(err);
                    return;
                }
                res.json(results)
            })
        }


    })
})

app.post("/login", function (req, res) {
    var sql = "select * from user where account='" + req.body.account + "'";
    mydb.query(sql, function (err, results) {

        if (results.account == req.body.account && results.passwd == req.body.password && results.flag == req.body.flag) {
            res.json({
                msg: "登录成功",
                data: results
            });
            console.log(results);
        }
    })
})

app.post("/addContent", function (req, res) {
    var mydate=new Date();
    var sql= `INSERT INTO publish(description,ptime,img) 
    values ('${req.body.constent}','${mydate.toLocaleString()}','${req.body.img}')`
    mydb.query(sql, function (err, results) {
        if (err) {
            console.log(err);
            return;
        }
        res.json(results)
    })

})
app.post("/delContent", function (req, res) {
    console.log(req.body.constent)
    var sql = `insert into del(delcontent) values('${req.body.constent}')`;
    mydb.query(sql, function (err, results) {
        if (err) {
            console.log(err);
            return;
        }
        // console.log(results,123);
        res.json(results)
    })

})

app.get('/getdelCon', (req, res) => {
    let sql = "select * from del where 1";
    mydb.query(sql, (err, results) => {
        // console.log(results)
        res.json(results);
    })
});
app.get('/getCon', (req, res) => {
    let sql = "select * from publish where 1";
    mydb.query(sql, (err, results) => {
        // console.log(results)
        res.json(results);
    })
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});
//不用子路由,直接在/后面添路径


app.post("/avater",(req,res)=>{
    console.log(req.body);  
    console.log(11111);
  
    let sql= `UPDATE user SET avater="${req.body.img}" WHERE account="${req.body.account}"`;
   
      mydb.query(sql,function(err,results){
      
        if (err) {
            console.log(err);
            return;
        }
        res.json(results);
      })
});

app.post("/nickname",(req,res)=>{
    console.log(req.body);  
    console.log(11111);
  
    let sql= `UPDATE user SET nickname="${req.body.nickname}" WHERE account="${req.body.account}"`;
   
      mydb.query(sql,function(err,results){
      
        if (err) {
            console.log(err);
            return;
        }
        res.json(results);
      })
});
app.post('/getuserinfo',(req,res)=>{
    let sql=`select nickname,avater from user where account="${req.body.account}"`;
    mydb.query(sql, (err, results) => {
        if (err) {
            console.log("数据请求错误!")
            return;
        }
        res.json(results);
    })

})


app.post("/addContent", function (req, res) {
    var mydate=new Date();
    var sql= `INSERT INTO publish(description,ptime,img,myaccount) 
    values ('${req.body.constent}','${mydate.toLocaleString()}','${req.body.img}','${req.body.account}')`
    mydb.query(sql, function (err, results) {
        if (err) {
            console.log(err);
            return;
        }
        res.json(results)
    })

})

app.post("/getinfor", (req, res) =>{
    let sql=`select my.avater,my.nickname,img,ptime,description,dz,sc from publish,(select avater,nickname from user,publish where user.account=publish.myaccount) as my`;
    mydb.query(sql, function (err, results) {
        if (err) {
            console.log(err);
            return;
        }
        res.json(results)
    })
})

app.use('/upload', require('./Controller/UploadController'));
app.use('/IMG', express.static(__dirname + '/IMG'));

app.listen(8081, () => {
    console.log('Example app listening on port 8081!');


});