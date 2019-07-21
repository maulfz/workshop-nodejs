const URL_API = 'https://ghibliapi.herokuapp.com/films';

document.addEventListener("DOMContentLoaded", function() {
    const APP = document.getElementById('app');
    fetch(URL_API)
    .then(res => res.json())
    .then(data => {
        console.log('hey ini response API', data);
        data.forEach(element => {
            var newElement = document.createElement('p');
            var att = document.createAttribute('class');
            att.value = 'notification';
            var newNode = document.createTextNode(element.title);
            newElement.appendChild(newNode);
            APP.appendChild(newElement); 
        });
    })
  });