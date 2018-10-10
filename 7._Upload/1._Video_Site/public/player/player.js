let urlParams = new URLSearchParams(window.location.search);
let videoId = urlParams.get('video');

const player = "<video width='640' height='480' src='/videos/" + videoId + "' controls>Sorry, your browser doesn't support embedded videos.</video>"

$("#player").append(player);