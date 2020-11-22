const titleInput = document.querySelector('#titled');
const bodyinput = document.querySelector('#body');
const userlist = document.querySelector('#notes');
const div = document.querySelector('#div')

function add_on() {
  
  const li = document.createElement('li'); 
  li.appendChild(document.createTextNode(`${titleInput.value}: ${bodyinput.value}`));
  li.classList.add('added');
  userlist.appendChild(li);

  titleInput.value = '';
  bodyinput.value = '';
}