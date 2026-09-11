function join(parts) {
  var isAbsolute = false;
  for (var i = 0; i < parts.length; i++) {
    if (parts[i] !== '') {
      isAbsolute = parts[i].charAt(0) === '/';
      break;
    }
  }

  var segments = [];
  for (var j = 0; j < parts.length; j++) {
    var part = parts[j];
    if (part === '') {
      continue;
    }
    var trimmed = part.replace(/^\/+/, '').replace(/\/+$/, '');
    if (trimmed !== '') {
      segments.push(trimmed);
    }
  }

  var result = segments.join('/');
  if (isAbsolute) {
    result = '/' + result;
  }
  return result;
}
