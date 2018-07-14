
// AdBlockCheck Analytics By SwarajSahu v0.1
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t:e.adblock=t()}(this,function(){"use strict";var e={},t=function(){var e=document.createElement("div");return e.id="adcontent",document.body.appendChild(e),e};return e.check=function(e,n){var o=t();setTimeout(function(){var t=0===o.offsetLeft&&0===o.offsetTop;e(t)},n||1e3)},e});

var enabled = document.querySelector('.enabled');
var disabled = document.querySelector('.disabled');
adblock.check(function (active) {
    if (active) {
        gtag('event', 'active', { 'event_category': 'adblock' });
    } else {
        gtag('event', 'inactive', { 'event_category': 'adblock' });
    }
}, 500);
