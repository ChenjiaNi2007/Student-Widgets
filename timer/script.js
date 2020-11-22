const btn = document.querySelector('#btn');

btn.onclick = function () {
	const mytext = document.querySelector('#text-in').value;

	window.open(`https://www.google.com/search?q=timer for ${mytext}`);
}