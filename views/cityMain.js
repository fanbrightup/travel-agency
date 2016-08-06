// var mysql = require('mysql');
var mButton = document.getElementById('showbutton');
var mydiv = document.getElementById('datadiv');
mButton.addEventListener('click',function(){
  mydiv.innerHTML = selectNames();
});
function selectNames(){
connection.query('select * from mytable1;',function(err,rows,fields){
  if(err){
    throw err;
  }
  // console.log('查询到的结果为'+rows[0].id+'  '+rows[0].querystring);
  // cityNames.push(rows[0].id);
  cityNames.push(rows[0].querystring);
  return cityNames;
});
}
