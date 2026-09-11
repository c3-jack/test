/**
 * Unit tests for AfTime.QuarterOf.
 */
function testAll() {
  describe('AfTime.QuarterOf', function () {
    describe('#quarter', function () {
      it('maps January-March dates to quarter 1', function () {
        expect(AfTime.QuarterOf.quarter(DateTime.fromString('2024-01-15T00:00:00Z'))).toEqual(1);
        expect(AfTime.QuarterOf.quarter(DateTime.fromString('2024-03-31T00:00:00Z'))).toEqual(1);
      });

      it('maps April-June dates to quarter 2', function () {
        expect(AfTime.QuarterOf.quarter(DateTime.fromString('2024-04-01T00:00:00Z'))).toEqual(2);
        expect(AfTime.QuarterOf.quarter(DateTime.fromString('2024-06-30T00:00:00Z'))).toEqual(2);
      });

      it('maps July-September dates to quarter 3', function () {
        expect(AfTime.QuarterOf.quarter(DateTime.fromString('2024-09-30T00:00:00Z'))).toEqual(3);
      });

      it('maps October-December dates to quarter 4', function () {
        expect(AfTime.QuarterOf.quarter(DateTime.fromString('2024-12-31T00:00:00Z'))).toEqual(4);
      });

      it('ignores the year — only the month component matters', function () {
        expect(AfTime.QuarterOf.quarter(DateTime.fromString('1999-02-01T00:00:00Z'))).toEqual(1);
        expect(AfTime.QuarterOf.quarter(DateTime.fromString('2050-11-01T00:00:00Z'))).toEqual(4);
      });

      it('ignores the time-of-day — only the month component matters', function () {
        expect(AfTime.QuarterOf.quarter(DateTime.fromString('2024-07-01T23:59:59Z'))).toEqual(3);
        expect(AfTime.QuarterOf.quarter(DateTime.fromString('2024-10-01T00:00:01Z'))).toEqual(4);
      });
    });
  });
}
