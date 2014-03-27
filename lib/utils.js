var open = (process.platform === 'win32') ? 'start' : 'open';


exports.home = function() {
	return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

exports.getRandomString = function(length) {
	var originalString = "0123456789qwertyuioplkjhgfdsazxcvbnm";
	var randomString = "";
	for(var i=0;i<length;i++){
		var stringPosition = Math.random()*originalString.length;
		randomString += originalString.charAt(Math.ceil(stringPosition)%originalString.length);
	}
	return randomString;
}
