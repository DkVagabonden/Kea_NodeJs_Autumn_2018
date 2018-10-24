$.ajax({
    "url": "/featured-videos",
    "method": "GET"
}).done(function(videos) {
    videos.forEach(function(video) {
        const videoCard =   "<div class='video-card'>" +
                                "<a href='/player?video=" + video.fileName + "'>" +
                                "<div id='" + video.fileName + "' class='video'>" +
                                "<img value='"+"../thumbnails/"+video.thumbnails[0]+"' data-alt-val='"+video.thumbnails.join(";")+"' class='img-loop'></input></div>" +
                                "</a>" +
                                 "<p class='title'>" + video.title + "</p>" +
                            "</div>";
        $(".video-gallery").append(videoCard);
        var alt_val, elem, i, timeout;

        $('#'+video.fileName)
        .mouseenter(function() {
            $(this).data('old-val', this.value);
            elem = this;
            alt_val = $(this).data('alt-val').split(';');
            i = 0;
            timeout = setTimeout(loop, 500);
        })
        .mouseout(function() {
            clearTimeout(timeout);
            this.value = $(this).data('old-val');
        });
        
        function loop() {
        if (i === alt_val.length) {
            elem.value = $(elem).data('old-val');
            i = 0;
        } else {
            elem.value = alt_val[i++];
        }
        timeout = setTimeout(loop, 500);
}
    })
});