function truncate(input, maxWords) {
  var words = input.split(/\s+/).filter(function (word) {
    return word.length > 0;
  });

  if (maxWords < 0) {
    maxWords = 0;
  }

  if (words.length <= maxWords) {
    return words.join(' ');
  }

  return words.slice(0, maxWords).join(' ') + ' ...';
}
