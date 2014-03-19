var mkdirp = require('mkdirp'),
    wget = require('wget'),
    utils = require('./utils');

var images = [];

exports.images = function(data, imagesCount) {
    var imagesDir = utils.home() + '/meinvImages/';
    mkdirp(imagesDir, function (err) {
        if (err) console.error(err)
    });


    var jsonData = JSON.parse(data),
    girls = jsonData.data,
    randomNumber = Math.random() * (girls.length - 1);
    for( var i = 1; i <= imagesCount; i ++) {
        downloadImages(girls[Math.floor(randomNumber) + i].image_url, imagesDir, imagesCount);
    }



};

function downloadImages(imageSource, imagesDir, imagesCount) {
    imageName = utils.getRandomString(8) + '.jpg';

    var output = imagesDir  + imageName;
    var download = wget.download(imageSource, output);
    download.on('error', function(err) {
        console.log(err);
    });
    download.on('end', function(output) {
        console.log(' * * * * * * * * * * * * * * ');
        images.push(output);
        if(images.length == imagesCount) {
            var imagesString = images.join(' ').toString();
            var open = (process.platform === 'win32') ? 'start' : 'open';
            var openImageCmd = open + ' ' + imagesString + ' 2>/dev/null';
            require('child_process').exec(openImageCmd, function (error, stdout, stderr) { });
        }


    });
}