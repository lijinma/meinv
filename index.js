var request = require('request');
var tagsCode = require('./lib/tags_code.json');
var display = require('./lib/display');

module.exports = function(word) {

  //Baidu image
  
  var url = 'http://image.baidu.com/channel/listjson?pn=0&rn=30&tag1=美女&tag2=全部';

  request.get(url + '&ftags=' + word, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      
      // console.log('body: ' + body);
      display.image(body);

    }
  })




};
