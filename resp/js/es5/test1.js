'use strict';

function get(url) {
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;

		if (xhr.status === 200) {
			console.log(xhr.response);
			return xhr.response;
		} else {
			console.log('Error: ' + xhr.status);
		}
	};

	xhr.open('GET', url);

	xhr.send();
}