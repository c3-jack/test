function check(date) {
  var dayOfWeek = parseInt(date.format('e'), 10);
  return dayOfWeek === 6 || dayOfWeek === 7;
}
