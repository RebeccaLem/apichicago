fetch('https://api.artic.edu/api/v1/artworks')
.then((response) => {
 return response.json();
})
.then((data) => {
   images = data.data;
    images.forEach(image => {
       test = image.image_id;
        fetch('https://www.artic.edu/iiif/2/' + test + '/full/843,/0/default.jpg')
       .then((response) => {
           var img = document.createElement('img');
            img.setAttribute('src', response.url);
           document.querySelector('#artists').append(img);
        })
    })
})