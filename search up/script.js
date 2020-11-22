const btn = document.querySelector('#btn');
const mytext = document.querySelector('#text-in').value;

btn.onclick = function () {
	const rbs = document.querySelectorAll('input[name="choice');
	let selectedValue;
	for(rb in rbs){
		if(rb.checked){
			selectedValue = rb.value; 
		}
	}
	if(selectedValue == "Wikipedia"){
		window.open(`en.wikipedia.org/wiki/${mytext}`);
	}
	else {
		window.open(`https://www.britannica.com/search?query=${mytext}`);
	}
}