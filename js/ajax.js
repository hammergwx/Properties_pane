function axios(a) {
	let api = 'http://127.0.0.1:3000/'
	let { method, url, data, success, error } = a;
	var xhr = new XMLHttpRequest() || new ActiveXObject('Microsoft.MXLHTTP');
	xhr.open(method, api + url + (method == 'get' ? getData(data) : ''));
	xhr.send(method == 'get' ? null : data);
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			if (xhr.status == 200) {
				success(JSON.parse(xhr.responseText))
			} else {
				error()
			}
		}
	}
}
function getData(data) {
	let str = '?';
	if (Object.keys(data).length) {
		Object.keys(data).forEach((item, index) => {
			if (index == Object.keys(data).length - 1) {
				str += `${item}=${data[item]}`
			} else {
				str += `${item}=${data[item]}&&`
			}
		})
	} else {
		str = '';
	}
	return str;
}