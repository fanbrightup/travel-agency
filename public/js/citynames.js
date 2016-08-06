var mysql = require('mysql');
var options = {
  host:'fanbright.gotoftp11.com',
  user:'fanbright',
  password:'fan15308011744',
  database:'fanbright'
};
var cityNames = [];
var connection = mysql.createConnection(options);
connection.connect();

function myquery(){
  connection.query('select * from mytable1;',function(err,rows,fields){
    if(err){
      console.log(err.message);
    }
    // console.log('查询到的结果为'+rows[0].id+'  '+rows[0].querystring);
    // cityNames.push(rows[0].id);
    cityNames.push(rows[0].querystring);
    // return 'cityNames[0]';
  });
}
connection.end();

function myq(){
  return 'he';
}

exports.myquery = myquery;
