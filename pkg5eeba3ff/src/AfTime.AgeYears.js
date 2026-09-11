function age(birthDate, asOf) {
  var reference = asOf ? asOf : DateTime.now();

  var years = reference.year() - birthDate.year();

  var refMonth = reference.monthOfYear();
  var refDay = reference.dayOfMonth();
  var birthMonth = birthDate.monthOfYear();
  var birthDay = birthDate.dayOfMonth();

  if (refMonth < birthMonth || (refMonth === birthMonth && refDay < birthDay)) {
    years -= 1;
  }

  return years;
}
