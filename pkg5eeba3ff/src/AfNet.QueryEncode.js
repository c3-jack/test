function encode(params) {
  var pairs = [];
  Object.keys(params).forEach(function (key) {
    var value = params[key];
    if (value === null || value === undefined) {
      return;
    }
    var encodedKey = encodeURIComponent(key);
    if (Array.isArray(value)) {
      value.forEach(function (item) {
        if (item === null || item === undefined) {
          return;
        }
        pairs.push(encodedKey + '=' + encodeURIComponent(String(item)));
      });
    } else {
      pairs.push(encodedKey + '=' + encodeURIComponent(String(value)));
    }
  });
  return pairs.join('&');
}
