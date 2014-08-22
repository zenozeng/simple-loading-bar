!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.SimpleLoadingBar=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
moudle.exports = function(container, opts) {
    var speed = (opts && opts.speed) || 0.2; // 20% per second
    var bar = document.createElement('div');
    bar.className = "simple-loading-bar";

    var maxProgress = 0.98,
        progress = 0;
    var iter = function() {
        bar.style.width = progress * 100 + "%";
        if(progress < 1) {
            progress = Math.min(maxProgress, progress + speed / 50);
            setTimeout(iter, 20);
        } else {
            bar.remove();
        }
    };
    
    container.appendChild(bar);

    return {
        start: function() {
            iter(0);
        },
        complete: function() {
            maxProgress = 1;
            speed = 2;
        }
    };
};

},{}]},{},[1])(1)
});