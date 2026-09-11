/**
 * Unit tests for AfTime.ToEpoch.
 */
function testAll() {
  describe('AfTime.ToEpoch', function () {
    describe('#convert', function () {
      it('returns 0 for the Unix epoch instant itself', function () {
        expect(AfTime.ToEpoch.convert(new Date(0))).toEqual(0);
      });

      it('returns the correct positive offset for an instant after the epoch', function () {
        expect(AfTime.ToEpoch.convert(new Date('1970-01-01T00:00:01Z'))).toEqual(1);
      });

      it('returns the correct offset for a well-known later date', function () {
        expect(AfTime.ToEpoch.convert(new Date('2000-01-01T00:00:00Z'))).toEqual(946684800);
      });

      it('returns a negative offset for an instant before the epoch', function () {
        expect(AfTime.ToEpoch.convert(new Date('1969-12-31T23:59:59Z'))).toEqual(-1);
      });

      it('preserves sub-second precision as a fractional number of seconds', function () {
        expect(AfTime.ToEpoch.convert(new Date(1500))).toEqual(1.5);
      });
    });
  });
}
