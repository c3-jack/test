/**
 * Unit tests for AfTime.HumanDelta.
 */
function testAll() {
  describe('AfTime.HumanDelta', function () {
    describe('#describe', function () {
      it('returns "just now" for gaps under 5 seconds, regardless of order', function () {
        var t = DateTime.now();
        expect(AfTime.HumanDelta.describe(t, t)).toBe('just now');
        expect(AfTime.HumanDelta.describe(t, t.plusSeconds(3))).toBe('just now');
        expect(AfTime.HumanDelta.describe(t.plusSeconds(3), t)).toBe('just now');
      });

      it('reports the largest applicable unit, pluralized correctly', function () {
        var t = DateTime.now();
        expect(AfTime.HumanDelta.describe(t, t.plusSeconds(45))).toBe('45 seconds');
        expect(AfTime.HumanDelta.describe(t, t.plusMinutes(1))).toBe('1 minute');
        expect(AfTime.HumanDelta.describe(t, t.plusHours(2))).toBe('2 hours');
      });

      it('is direction-agnostic: swapping from/to yields the same result', function () {
        var t = DateTime.now();
        var later = t.plusDays(3);
        expect(AfTime.HumanDelta.describe(t, later)).toBe('3 days');
        expect(AfTime.HumanDelta.describe(later, t)).toBe('3 days');
      });

      it('treats a gap of exactly 5 seconds as no longer "just now"', function () {
        var t = DateTime.now();
        expect(AfTime.HumanDelta.describe(t, t.plusSeconds(5))).toBe('5 seconds');
      });
    });
  });
}
