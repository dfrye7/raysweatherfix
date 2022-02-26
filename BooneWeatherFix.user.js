// ==UserScript==
// @match      http*://www.booneweather.com/*
// @match      http*://www.raysweather.com/*
// @name       BooneWeatherFix
// @require    http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    console.log('Let me just fix that logo...');
    $('#banner_container').find('img[src$="/images/logotop.png"]').each(function (index, value) { $(value).css({"position":"relative","top":"3.5px"});} );
})();
