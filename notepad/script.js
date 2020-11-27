const titleInput = document.querySelector('#titled');
const bodyinput = document.querySelector('#body');
const userlist = document.querySelector('#notes');
const div = document.querySelector('#div')
const reset = document.querySelector('.reset')

if(localStorage.getItem("number") == null){
	localStorage.setItem("number","0")
}
for(let i = 1; i <= localStorage.getItem("number"); i++){
	const li = document.createElement('li'); 
 	li.appendChild(document.createTextNode(localStorage.getItem(String(i))));
 	li.classList.add('added');
  	userlist.appendChild(li);
}

function add_on() {
  
  const li = document.createElement('li'); 
  li.appendChild(document.createTextNode(`${titleInput.value}: ${bodyinput.value}`));
  li.classList.add('added');
  userlist.appendChild(li);

  localStorage.setItem("number", String(Number(localStorage.getItem("number"))+1))
  localStorage.setItem(localStorage.getItem("number"), `${titleInput.value}: ${bodyinput.value}`);

  titleInput.value = '';
  bodyinput.value = '';
}

reset.onclick = function() {
	localStorage.clear();
	document.querySelector("ul").innerHTML = "";
}