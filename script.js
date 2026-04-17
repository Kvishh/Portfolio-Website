const bg_images = ["preview_2.png", "preview_3.png",  "preview_4.png", "preview_5.png", "preview_6.png", "preview_7.png"]
let index = 0

function change_bg_image(){
    index = (index + 1) % bg_images.length
    document.querySelector("#background-image-holder").style.backgroundImage = `url(assets/images/${bg_images[index]})`;
}

setInterval(change_bg_image, 4000)