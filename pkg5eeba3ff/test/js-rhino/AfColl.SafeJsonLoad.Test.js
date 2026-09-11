/**
 * Unit tests for AfColl.SafeJsonLoad.
 */
function testAll() {
  describe('AfColl.SafeJsonLoad', function () {
    describe('#parse', function () {
      it('parses a valid JSON object string', function () {
        expect(AfColl.SafeJsonLoad.parse('{"a":1}')).toEqual({ a: 1 });
      });

      it('parses a valid JSON array string', function () {
        expect(AfColl.SafeJsonLoad.parse('[1,2,3]')).toEqual([1, 2, 3]);
      });

      it('returns undefined for malformed JSON when no fallback is given', function () {
        expect(AfColl.SafeJsonLoad.parse('not json')).toBeUndefined();
      });

      it('returns the given fallback for malformed JSON', function () {
        expect(AfColl.SafeJsonLoad.parse('not json', {})).toEqual({});
      });

      it('returns the given fallback when input is null', function () {
        expect(AfColl.SafeJsonLoad.parse(null, [])).toEqual([]);
      });

      it('does not throw on truncated JSON', function () {
        expect(function () {
          AfColl.SafeJsonLoad.parse('{"a":');
        }).not.toThrow();
      });
    });
  });
}
