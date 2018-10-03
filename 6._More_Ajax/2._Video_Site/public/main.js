let script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
script.type = 'text/javascript';

script.onreadystatechange = handler;
script.onload = handler;

var head = document.getElementsByTagName('head')[0];
// Fire the loading
head.appendChild(script);

function handler() {
    $("#header").load("/components/header.html");
    $("#footer").load("/components/footer.html");
}