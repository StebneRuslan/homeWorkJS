function search() {
    $.ajax({
        type: 'GET',
        url: `https://p2i.p.mashape.com/restfullink?p2i_device=6&p2i_fullpage=0&p2i_imageformat=jpg&p2i_key=c8cc5e1a0e739ff8&p2i_refresh=0&p2i_screen=1024x768&p2i_size=300x300&p2i_url=${input.value}&p2i_wait=10`,
        headers: {
            'X-Mashape-Key': 'epunll0ciXmshJlMfwwQAu7EGIu0p14vNWUjsnK9tdu0J22tBX',
            'Accept': 'application/json'
        }
    }).done(function (req) {
        let img = document.createElement('img');
        img.setAttribute('src', `${req.split("image_url")[1].split("\"")[2]}`);
        image.prepend(img)
    })
}