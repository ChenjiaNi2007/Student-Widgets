const btn = document.querySelector('#btn');

btn.onclick = function () {
	const mytext = document.querySelector('#text-in').value;
	var rd1 = document.getElementById("rd1");
	var rd2 = document.getElementById("rd2");
	if(rd1.checked){
		window.open(`https://en.wikipedia.org/wiki/${mytext}`);
	}
	if(rd2.checked) {
		window.open(`https://www.britannica.com/search?query=${mytext}`);
	}
}