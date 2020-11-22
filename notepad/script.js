const titleInput = document.querySelector('#title');
const bodyinput = document.querySelector('#body');
const userlist = document.querySelector('#notes');

function add_on() {
  
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`${titleInput.value}: ${bodyinput.value}`));
  userlist.appendChild(li);

  titleInput.value = '';
  bodyinput.value = '';
}