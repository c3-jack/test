/**
 * Unit tests for AfColl.SafeJsonLoad.
 */
function testAll() {
  describe('AfColl.SafeJsonLoad', function () {
    describe('#parse', function () {
      it('parses a valid JSON object string into an object', function () {
        var result = AfColl.SafeJsonLoad.parse('{"a": 1, "b": "two"}');
        expect(result.a).toEqual(1);
        expect(result.b).toEqual('two');
      });

      it('parses a valid JSON array string into an array', function () {
        var result = AfColl.SafeJsonLoad.parse('[1, 2, 3]');
        expect(result).toEqual([1, 2, 3]);
      });

      it('returns null for malformed JSON instead of throwing', function () {
        var result = AfColl.SafeJsonLoad.parse('not json');
        expect(result).toBeNull();
      });

      it('returns null for an empty or blank string', function () {
        expect(AfColl.SafeJsonLoad.parse('')).toBeNull();
        expect(AfColl.SafeJsonLoad.parse('   ')).toBeNull();
      });
    });
  });
}
