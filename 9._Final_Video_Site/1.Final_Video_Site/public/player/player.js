let urlParams = new URLSearchParams(window.location.search);
let videoId = urlParams.get('video');

const player = "<video width='1024' height='768' src='/videos/" + videoId + "' controls>" +
    "Sorry, your browser doesn't support embedded videos.</video>"

$("#player").append(player);