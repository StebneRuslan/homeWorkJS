function get() {
    let userName = input.value;
    $.ajax({
        type: 'GET',
        url: `https://madde22-instagram-v1.p.mashape.com/Instagram/GetRecentImages?Username=${userName}`,
        headers: {
            'X-Mashape-Key': 'epunll0ciXmshJlMfwwQAu7EGIu0p14vNWUjsnK9tdu0J22tBX'
        }
    }).done(function(req) {
        let imageDiv = document.createElement('div');
        for (let i = 0; i < req.length; i++) {
            let img = document.createElement('img');
            img.setAttribute('src', `${req[i].DisplayUrl}`);
            imageDiv.prepend(img)
        }
        images.append(imageDiv);
        console.log(req);
    });
}

