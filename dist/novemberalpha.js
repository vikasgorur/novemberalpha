(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})
({1:[function(require,module,exports){
"use strict";

var natoAlphabet = {
  a: 'alpha',
  b: 'bravo',
  c: 'charlie',
  d: 'delta',
  e: 'echo',
  f: 'foxtrot',
  g: 'golf',
  h: 'hotel',
  i: 'india',
  j: 'juliet',
  k: 'kilo',
  l: 'lima',
  m: 'mike',
  n: 'november',
  o: 'oscar',
  p: 'papa',
  q: 'quebec',
  r: 'romeo',
  s: 'sierra',
  t: 'tango',
  u: 'uniform',
  v: 'victor',
  w: 'whiskey',
  x: 'x-ray',
  y: 'yankee',
  z: 'zulu'
};

/**
 * given a word return an array of words that spell it out
 * using the NATO phonetic alphabet.
 */
function pronounce(word) {
  var result = [];
  for (var _iterator = word, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var c = _ref;

    if (natoAlphabet[c]) {
      result.push(natoAlphabet[c]);
    } else {
      result.push(c);
    }
  }

  return result;
};

/**
 * Make sure that all the text fits vertically within the window.
 */
function fitText() {
  // pixels available for text
  var availHeight = $(window).height() - $("#result").position().top;
  var resultHeight = $("#result").height();

  if (resultHeight > availHeight) {
    var fontSize = availHeight / resultHeight * parseFloat($(".nato-word").css("font-size"));
    $(".nato-word").css("font-size", fontSize + "px");
  }
}

$(document).ready(function () {
  $("#word").keyup(function (e) {
    var word = $("#word").val();

    $("#result").html(pronounce(word).map(function (p) {
      return '<div class="nato-word col-sm-4"><span class="first-letter">' + p[0] + '</span>' + p.substr(1, p.length) + '</div>';
    }).join(''));

    fitText();
  });
});

},{}]},{},[1]);