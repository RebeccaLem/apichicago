

fetch('https://api.artic.edu/api/v1/artworks?page=1')
.then((response) => {
    return response.json();
})
.then((data) => {
artworks = data.data;
    artworks.forEach(artwork => {
        var p = document.createElement('p');
        p.innerHTML = artwork.artist_title;
        document.querySelector('#masterpiece').append(p); 
    })
    
})

document.querySelector("input").addEventListener('click', (el) => {
    el = el.target;

    var pagination = data.pagination;
    var data_url = pagination.next_url;
    fetch(data_url)
    .then((response) => {
        return response.json();
    })
    .then((id) => { 
        pagination.next_url++;
        console.log(pagination.next_url);
    })

    document.querySelector('input').classList.remove('none');
})


