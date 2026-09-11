function describe(from, to) {
  var deltaSeconds = Math.abs(DateTime.deltaSeconds(from, to));

  if (deltaSeconds < 5) {
    return 'just now';
  }

  var units = [
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
    ['second', 1]
  ];

  for (var i = 0; i < units.length; i++) {
    var name = units[i][0];
    var secondsPerUnit = units[i][1];
    if (deltaSeconds >= secondsPerUnit) {
      var count = Math.floor(deltaSeconds / secondsPerUnit);
      return count + ' ' + name + (count === 1 ? '' : 's');
    }
  }

  return 'just now';
}
