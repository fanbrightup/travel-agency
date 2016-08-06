var express = require('express');
var app = express();
//  连接数据库
var mysql = require('mysql');
var options = {
  host:'fanbright.gotoftp11.com',
  user:'fanbright',
  password:'fan15308011744',
  database:'fanbright'
};
var connection = mysql.createConnection(options);
connection.connect();
var fortune = require('./lib/fortune.js');
//  设置handlebars视图引擎
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

//  设置端口
app.set('port',process.env.PORT || 3000);
//  设置static中间件
app.use(express.static(__dirname+'/public'));

//  设置路由
app.get('/',function(req,res){
  res.render('home');
});
app.get('/about',function(req,res){
  res.render('about',{fortune:fortune.getFortune()});
})
//  定制地图页面
app.get('/map',function(req,res){
  res.render('map');
})
app.get('/city',function(req,res){
  var cityNames = [];
  connection.query('select * from mytable1;',function(err,rows,fields){
    if(err){
      throw err;
    }
    // console.log('查询到的结果为'+rows[0].id+'  '+rows[0].querystring);
    // cityNames.push(rows[0].id);
    cityNames.push(rows[0].querystring);
    // console.log(cityNames);
    res.send(cityNames);
  });
  res.send('cityNames');
})
//  定制404页面
app.use(function(req,res,next){
  res.status(404);
  res.render('404');
});
//  定制500页面
app.use(function(err,req,res,next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});
//  监听端口
app.listen(app.get('port'),function(){
  console.log('Express started on http://localhost:'+
    app.get('port')+';press Ctrl-C to terminate.');
});
