//  虚拟幸运饼干
var fortunes = [

  "1 + 1 = 2",
  "2 + 2 = 4",
  "3 + 3 = 6",
  "4 + 4 = 8",
  "5 + 5 = 10",
];
exports.getFortune = function(){
  var idx = Math.floor(Math.random()*fortunes.length);
  return fortunes[idx];
};
