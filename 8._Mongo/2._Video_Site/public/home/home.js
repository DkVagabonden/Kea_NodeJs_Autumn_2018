$.ajax({
    "url": "/featured-videos",
    "method": "GET"
}).done(function(videos) {
    videos.forEach(function(videoTitle) {
        const videoCard =   "<div class='video-card'>" +
                                "<a href='/player?video=" + videoTitle + "'>" +
                                "<div id='" + videoTitle + "' class='video'></div>" +
                                "</a>" +
                                 "<p class='title'>" + videoTitle + "</p>" +
                            "</div>";
        $(".video-gallery").append(videoCard);
    })
});