/**
 * Unit tests for AfTime.AddDaysStr.
 */
function testAll() {
  describe('AfTime.AddDaysStr', function () {
    describe('#add', function () {
      it('adds a single day within the same month', function () {
        var result = AfTime.AddDaysStr.add('2026-09-11', 1);
        expect(result).toEqual('2026-09-12');
      });

      it('adds days across a month boundary', function () {
        expect(AfTime.AddDaysStr.add('2026-09-11', 30)).toEqual('2026-10-11');
      });

      it('subtracts a day across a year boundary', function () {
        expect(AfTime.AddDaysStr.add('2026-01-01', -1)).toEqual('2025-12-31');
      });

      it('adds a day into a leap day', function () {
        expect(AfTime.AddDaysStr.add('2024-02-28', 1)).toEqual('2024-02-29');
      });

      it('returns the same date when adding 0 days', function () {
        expect(AfTime.AddDaysStr.add('2026-09-11', 0)).toEqual('2026-09-11');
      });
    });
  });
}
