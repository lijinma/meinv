var request = require('request'),
    tagsCode = require('./lib/tags_code.json'),
    display = require('./lib/display');
    utils = require('./lib/utils');

module.exports = function(imagesCount) {
    //Baidu image
    var pn = Math.floor(Math.random() * 200);
    //console.log ('pn : ' + pn);
    var randomTag = utils.getRandomString(10);
    var url = 'http://image.baidu.com/channel/listjson?pn=' + pn + '&rn=200&tag1=美女&tag2=全部';
    request.get(url + '&ftags=' + randomTag, function (error, response, data) {
        if (!error && response.statusCode == 200) {
        // console.log('data: ' + data);
            display.images(data, imagesCount);
        }
    });
};
