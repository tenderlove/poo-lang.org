/**
 * Determine if this browser supports emoji.
 *
 * Source: https://gist.github.com/mwunsch/4710561
 *
 * Copyright (c) 2013 Mark Wunsch. Licensed under the MIT License.
 * @markwunsch
 */
function doesSupportEmoji() {
  var context, smiley;
  if (!document.createElement('canvas').getContext) return;
  context = document.createElement('canvas').getContext('2d');
  if (typeof context.fillText != 'function') return;
  smile = "💩";

  context.textBaseline = "top";
  context.font = "32px Arial";
  context.fillText(smile, 0, 0);
  return context.getImageData(16, 16, 1, 1).data[0] !== 0;
}

function replacePoo() {
  html = $(this).html();
  smile = "💩";
  $(this).html(html.replace(smile, '<img src="https://twemoji.maxcdn.com/svg/1f4a9.svg" />'));
}

if(!doesSupportEmoji()) {
  $(function() {
    $('h1, footer').each(replacePoo);
  });
}
