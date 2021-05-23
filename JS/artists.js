fetch('https://api.artic.edu/api/v1/artworks')
.then((response) => {
    return response.json();
})
.then((data) => {
    artists = data.data;
    var i = 1;
    artists.forEach(artist => {
        var name = artist.artist_title;
        document.querySelector('.artistButton' + i).setAttribute("value", name);
        i++;
    })
})

var j = 1
function search (el, url) {
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        if (data.data.length != 0) {
            var images = data.data;
            console.log(url);
            images.forEach(image => {
                if (image.artist_title === el.value) {
                    test = image.image_id;
                    fetch('https://www.artic.edu/iiif/2/' + test + '/full/843,/0/default.jpg')
                    .then((response) => {
                        var div = document.createElement('figure');
                        var p = document.createElement('figcaption');
                        var img = document.createElement('img');
                        p.setAttribute('class', 'info' + j);
                        img.setAttribute('src', response.url);
                        div.append(img);
                        div.append(p);
                        document.querySelector('#artists').append(div);
                        if(image.artist_title != null) {
                            document.querySelector('.info' + j).append('Auteur : ');
                            document.querySelector('.info' + j).append(image.artist_title);
                        }else {
                            document.querySelector('.info' + j).append('Auteur : ');
                            document.querySelector('.info' + j).append('Inconnu');
                        }
                        document.querySelector('.info' + j).append("\nTitre : " + image.title);
                        document.querySelector('.info' + j).append("\nMatériaux : " + image.medium_display);
                        document.querySelector('.info' + j).append("\nDate : " + image.date_display);
                        document.querySelector('.info' + j).append("\nPeriode : " + image.category_titles);
                        j++
                    })
                }
            })
            url = data.pagination.next_url;
            // debugger
            search(el, url);
        }
    })
}

var i = 0;
document.querySelector('.pictures').addEventListener("click", (el) => {
    el = el.target;
    if (el.dataset.button) {
        if (el.value != 'null') {
            fetch('https://api.artic.edu/api/v1/artworks')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                var url = data.pagination.next_url
                var images = data.data;
                if (document.querySelector('figure')){
                    var x = document.querySelectorAll('figure');
                    for (k = 0; k < x.length; k++) {
                        document.querySelector('figure').remove();
                    }
                }
                images.forEach(image => {
                    if (image.artist_title === el.value) {
                        test = image.image_id;
                        fetch('https://www.artic.edu/iiif/2/' + test + '/full/843,/0/default.jpg')
                        .then((response) => {
                            var div = document.createElement('figure');
                            var p = document.createElement('figcaption');
                            var img = document.createElement('img');
                            p.setAttribute('class', 'info' + i);
                            img.setAttribute('src', response.url);
                            div.append(img);
                            div.append(p);
                            document.querySelector('#artists').append(div);
                            if(image.artist_title != null) {
                                document.querySelector('.info' + i).append('Auteur : ');
                                document.querySelector('.info' + i).append(image.artist_title);
                            }else {
                                document.querySelector('.info' + i).append('Auteur : ');
                                document.querySelector('.info' + i).append('Inconnu');
                            }
                            document.querySelector('.info' + i).append("\nTitre : " + image.title);
                            document.querySelector('.info' + i).append("\nMatériaux : " + image.medium_display);
                            document.querySelector('.info' + i).append("\nDate : " + image.date_display);
                            document.querySelector('.info' + i).append("\nPeriode : " + image.category_titles);
                        })
                    }
                })
                search(el, url);
            })
        }
    }
})

var url = "";
var pUrl = "";

fetch('https://api.artic.edu/api/v1/artworks')
.then((response) => {
    return response.json();
})
.then((data) => {
    url = data.pagination.next_url;
    artists = data.data;
    var i = 1;
    artists.forEach(artist => {
        var name = artist.artist_title;
        document.querySelector('.artistButton' + i).setAttribute("value", name);
        i++;
    })
})

document.querySelector("#bouton").addEventListener('click', (el) => {
    el = el.target;
    if (el.dataset.artist){
        if(el.value === "precedent") {
            prevURL(pUrl);
        } else if (el.value === "suivant") {
            prevURL(url);
        }
    }
})

var j = 1
function search (el, url) {
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        if (data.data.length != 0) {
            var images = data.data;
            console.log(url);
            images.forEach(image => {
                if (image.artist_title === el.value) {
                    test = image.image_id;
                    fetch('https://www.artic.edu/iiif/2/' + test + '/full/843,/0/default.jpg')
                    .then((response) => {
                        var div = document.createElement('figure');
                        var p = document.createElement('figcaption');
                        var img = document.createElement('img');
                        p.setAttribute('class', 'info' + j);
                        img.setAttribute('src', response.url);
                        div.append(img);
                        div.append(p);
                        document.querySelector('#artists').append(div);
                        if(image.artist_title != null) {
                            document.querySelector('.info' + j).append('Auteur : ');
                            document.querySelector('.info' + j).append(image.artist_title);
                        }else {
                            document.querySelector('.info' + j).append('Auteur : ');
                            document.querySelector('.info' + j).append('Inconnu');
                        }
                        document.querySelector('.info' + j).append("\nTitre : " + image.title);
                        document.querySelector('.info' + j).append("\nMatériaux : " + image.medium_display);
                        document.querySelector('.info' + j).append("\nDate : " + image.date_display);
                        document.querySelector('.info' + j).append("\nPeriode : " + image.category_titles);
                        j++
                    })
                }
            })
            url = data.pagination.next_url;
            search(el, url);
        }
    })
}

var i = 0;
document.querySelector('.pictures').addEventListener("click", (el) => {
    el = el.target;
    if (el.dataset.button) {
        if (el.value != 'null') {
            fetch('https://api.artic.edu/api/v1/artworks')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                var url = data.pagination.next_url
                var images = data.data;
                if (document.querySelector('figure')){
                    var x = document.querySelectorAll('figure');
                    for (k = 0; k < x.length; k++) {
                        document.querySelector('figure').remove();
                    }
                }
                images.forEach(image => {
                    if (image.artist_title === el.value) {
                        test = image.image_id;
                        fetch('https://www.artic.edu/iiif/2/' + test + '/full/843,/0/default.jpg')
                        .then((response) => {
                            var div = document.createElement('figure');
                            var p = document.createElement('figcaption');
                            var img = document.createElement('img');
                            p.setAttribute('class', 'info' + i);
                            img.setAttribute('src', response.url);
                            div.append(img);
                            div.append(p);
                            document.querySelector('#artists').append(div);
                            if(image.artist_title != null) {
                                document.querySelector('.info' + i).append('Auteur : ');
                                document.querySelector('.info' + i).append(image.artist_title);
                            }else {
                                document.querySelector('.info' + i).append('Auteur : ');
                                document.querySelector('.info' + i).append('Inconnu');
                            }
                            document.querySelector('.info' + i).append("\nTitre : " + image.title);
                            document.querySelector('.info' + i).append("\nMatériaux : " + image.medium_display);
                            document.querySelector('.info' + i).append("\nDate : " + image.date_display);
                            document.querySelector('.info' + i).append("\nPeriode : " + image.category_titles);
                        })
                    }
                })
                search(el, url);
            })
        }
    }
})

function prevURL(URL){
    fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        artists = data.data;
        url = data.pagination.next_url;
        if (data.pagination.prev_url) {
            pUrl = data.pagination.prev_url
        }
        var l = 1;
        artists.forEach(artist => {
            var name = artist.artist_title;
            document.querySelector('.artistButton' + l).setAttribute("value", name);
            l++;
        })
    })

}



