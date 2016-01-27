'use strict';

var weddingApp = angular.module( 'weddingApp', [ 'ngMaterial' ] );

window.onscroll = function() {
    var scrollTop = window.pageYOffset;
    var scrolledOnce = false;
    if(scrollTop > 50) {
        var header = document.getElementById('doc-header').classList.add('compact');
        scrolledOnce = true;
    }
    if(scrolledOnce = true) {
        if(scrollTop <= 50) {
            var header = document.getElementById('doc-header').classList.remove('compact');
        }
    }
}