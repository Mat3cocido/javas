warn = document.getElementById("gonzy");

console.log(warn);

warn.innerHTML = "hola <br> mundo";

warn.classList.add('parrafo');

papa = document.getElementById('padre');

hijo = document.createElement('li');

hijo.textContent = 'esto es una lista';

papa.appendChild(hijo);


