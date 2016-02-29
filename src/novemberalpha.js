"use strict";

const natoAlphabet = {
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
  let result = [];
	for (var c of word) {
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
  let availHeight = $(window).height() - $("#result").position().top;
  let resultHeight = $("#result").height();
  
  if (resultHeight > availHeight) {
    let fontSize = (availHeight / resultHeight) * parseFloat($(".nato-word").css("font-size"));
    $(".nato-word").css("font-size", fontSize + "px"); 
  }        
}

$(document).ready(function() {
  $("#word").keyup(e => {
    const word = $("#word").val();
    
    $("#result").html(pronounce(word).map(p => {
      return `<div class="nato-word col-sm-4"><span class="first-letter">${p[0]}</span>${p.substr(1, p.length)}</div>`;
    }).join(''));

    fitText();
  });  
});
