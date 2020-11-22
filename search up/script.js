const btn = document.querySelector('#btn');

btn.onclick = function () {
	const mytext = document.querySelector('#text-in').value;
	let selectedValue;
	var radios = document.querySelectorAll('.ra');

	for(radio in radios){
		if(radio.checked){
			selectedValue = radio.value;
		}
	}
	console.log("finihaeorjghflsreg")
	if(selectedValue == "Wikipedia"){
		window.open(`https://en.wikipedia.org/wiki/${mytext}`);
	}
	if(selectedValue == "Britannica") {
		window.open(`https://www.britannica.com/search?query=${mytext}`);
	}
}