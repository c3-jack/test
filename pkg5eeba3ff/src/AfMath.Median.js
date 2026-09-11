function median(values) {
  if (!values || values.length === 0) {
    throw new Error('AfMath.Median.median: values must be a non-empty array');
  }

  var sorted = values.slice().sort(function (a, b) {
    return a - b;
  });

  var mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 1) {
    return sorted[mid];
  }

  return (sorted[mid - 1] + sorted[mid]) / 2;
}
