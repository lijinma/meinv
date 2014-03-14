exports.image = function(data) {

	jsonData = JSON.parse(data);

	girls = jsonData.data;
	
	length = girls.length - 1;

    console.log('length: ' + length);

	
	randomNumber = Math.random() * length;
	
	console.log('randomNumber: ' + randomNumber);
	
	imagePath = girls[Math.floor(randomNumber)].image_url;
    // console.log ('imagePath : ' + imagePath);


    var openImageCmd = '\
    mkdir ~/mienvImages ; \
    wget -O ~/meinvImages/file ' + imagePath + ' && \
    open ~/meinvImages/file 2>/dev/null';

    require('child_process').exec(openImageCmd, function (error, stdout, stderr) { });


};