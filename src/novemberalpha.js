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
 * Make sure that all the text fits vertically within the supplied container.
 */
function fitText($container) {
  // pixels available for text
  const availHeight = $(window).height() - $container.position().top;
  const resultHeight = $container.height();
  
  if (resultHeight > availHeight) {
    const fontSize = (availHeight / resultHeight) * parseFloat($(".nato-word").css("font-size"));
    $container.css("font-size", fontSize + "px"); 
  }        
}

function majorKong() {
  window.location.href = "https://www.youtube.com/watch?v=JlSQAZEp3PA";  
}

function refresh() {
  const words = $("#words").val().split(" ");
  
  if (words.join(" ").toLowerCase() === "wing attack plan r") {
    majorKong();
  }
  
  $(".result-area").empty();
  
  for (let i = 0; i < words.length; i++) {
    $(".result-area").append($(`<div class="word-${i}"></div>`));
    
    const $word_i = $(`.word-${i}`);
    $word_i.css("flex", i);
    $word_i.css("height", "100%");
    
    $word_i.html(pronounce(words[i]).map(p => {
      return `<div><span class="first-letter">${p[0]}</span>${p.substr(1, p.length)}</div>`;
    }).join(''));
    
    fitText($word_i);
  }
   
  const appRoot = window.location.href.substr(0, window.location.href.lastIndexOf('/'));
  history.replaceState({}, "", `${appRoot}/${words.join(" ")}`);
}

/**
 * Make URLs like /novemberalpha/wtf work.
 */
function prefillInput() {
  const path = window.location.pathname;
  const input = decodeURIComponent(path.substr(path.lastIndexOf("/") + 1, path.length));
  
  if (input) {
    $("#words").val(input);
    refresh();
  }
}

$(document).ready(function() {
  prefillInput();
  $("#words").keyup(e => refresh());
});
