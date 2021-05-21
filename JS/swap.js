fetch('https://swapi.dev/api/people/').then((response) => {
 return response.json();
}).then((data) => { 
    console.log(data);
    var characters = data.results;
    var ul = document.createElement('ul');
    characters.forEach(character => {
        var li = document.createElement('li');
        li.innerHTML = character.name;
        li.setAttribute('data-url', character.url);
        ul.append(li);
    });
    document.querySelector('aside').append(ul);
})

document.querySelector('aside').addEventListener('click', (el) => {
    el = el.target;
    if(el.dataset.url) { 
        fetch(el.dataset.url)
        .then((response) => {
            return response.json();
        })
        .then((character) => {
            document.querySelector('#name').innerHTML = character.name;
            document.querySelector('#hair-color').innerHTML = character.hair_color;
            document.querySelector('#mass').innerHTML = character.mass;
            document.querySelector('#height').innerHTML = character.height;
            document.querySelector('main').classList.remove('none');
        })
    }
})

