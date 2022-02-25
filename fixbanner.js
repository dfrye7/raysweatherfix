var head = document.getElementsByTagName("head")[0];
var script = document.createElement("script");
script.src = "//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js";
script.onload = function() {
    $('#banner_container').find('img[src$="/images/logotop.png"]').each(function (index, value) { $(value).css({"position":"relative","top":"3.5px"});} );
};
head.appendChild(script);