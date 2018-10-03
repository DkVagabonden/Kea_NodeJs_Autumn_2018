const videoCard =   "<div class='video-card'>" +
                        "<div class='video'></div>" +
                        "<p class='title'>" + "Here is the title!" + "</p>" +
                    "</div>";

for (let i = 0; i < 30; i++) {
    $(".video-gallery").append(videoCard);
}                   
