$.ajax({
    "url": "/featured-videos",
    "method": "GET"
}).done(function(videos) {
    videos.forEach(function(video) {
        const videoCard =   "<div class='video-card'>" +
                                "<a href='/player?video=" + video.fileName + "'>" +
                                "<div id='" + video.fileName + "' class='video'></div>" +
                                "</a>" +
                                 "<p class='title'>" + video.title + "</p>" +
                            "</div>";
        $(".video-gallery").append(videoCard);
    })
});