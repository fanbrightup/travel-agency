var express = require('express');
var app = express();

//  设置handlebars视图引擎
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');



//  设置端口
app.set('port',process.env.PORT || 3000);
//  设置路由
app.get('/',function(req,res){
  res.render('home');
});
app.get('/about',function(req,res){
  res.render('about');
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

app.listen(app.get('port'),function(){
  console.log('Express started on http://localhost:'+
    app.get('port')+';press Ctrl-C to terminate.');
});