/**
 * Unit tests for AfTime.AgeYears.
 */
function testAll() {
  describe('AfTime.AgeYears', function () {
    describe('#age', function () {
      it('returns the exact number of years when asOf lands on the birthday', function () {
        var birthDate = DateTime.fromString('2000-06-15T00:00:00Z');
        var asOf = DateTime.fromString('2020-06-15T00:00:00Z');
        expect(AfTime.AgeYears.age(birthDate, asOf)).toEqual(20);
      });

      it('does not count the current year when the birthday has not yet occurred', function () {
        var birthDate = DateTime.fromString('2000-06-15T00:00:00Z');
        var asOf = DateTime.fromString('2020-06-14T00:00:00Z');
        expect(AfTime.AgeYears.age(birthDate, asOf)).toEqual(19);
      });

      it('counts the current year once the birthday has passed', function () {
        var birthDate = DateTime.fromString('2000-06-15T00:00:00Z');
        var asOf = DateTime.fromString('2020-07-01T00:00:00Z');
        expect(AfTime.AgeYears.age(birthDate, asOf)).toEqual(20);
      });

      it('returns 0 or negative for a birthDate that is at or after asOf', function () {
        var birthDate = DateTime.fromString('2020-01-01T00:00:00Z');
        var asOf = DateTime.fromString('2019-01-01T00:00:00Z');
        expect(AfTime.AgeYears.age(birthDate, asOf)).toEqual(-1);
      });

      it('handles a leap-day birthday correctly in non-leap reference years', function () {
        var birthDate = DateTime.fromString('2000-02-29T00:00:00Z');
        var notYetOccurred = DateTime.fromString('2019-02-28T00:00:00Z');
        var alreadyPassed = DateTime.fromString('2019-03-01T00:00:00Z');
        expect(AfTime.AgeYears.age(birthDate, notYetOccurred)).toEqual(18);
        expect(AfTime.AgeYears.age(birthDate, alreadyPassed)).toEqual(19);
      });
    });
  });
}
