function run() {
    $.ajax({
        type: 'GET',
        url: `https://pierre2106j-qrcode.p.mashape.com/api?backcolor=${backcolor.value.split("#")[1]}&ecl=H&forecolor=${forecolor.value.split("#")[1]}&pixel=10&text=${text.value}&type=${type.value}`,
        headers: {
            'X-Mashape-Key': 'epunll0ciXmshJlMfwwQAu7EGIu0p14vNWUjsnK9tdu0J22tBX',
            'Accept': 'text/plain'
        }
    }).done(function (req) {
        let img = document.createElement('img');
        img.setAttribute('src', req.toString());
        image.prepend(img);
    })
}