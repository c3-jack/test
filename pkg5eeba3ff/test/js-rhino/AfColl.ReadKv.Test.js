/**
 * Unit tests for AfColl.ReadKv.
 */
function testAll() {
  describe('AfColl.ReadKv', function () {
    describe('#parse', function () {
      it('parses key=value lines into a string map, trimming whitespace', function () {
        var result = AfColl.ReadKv.parse('a=1\n b = 2 \n');
        expect(result).toEqual({ a: '1', b: '2' });
      });

      it('skips blank lines and comment lines starting with #', function () {
        var result = AfColl.ReadKv.parse('# a comment\n\na=1\n   \nb=2');
        expect(result).toEqual({ a: '1', b: '2' });
      });

      it('lets a later duplicate key overwrite an earlier one', function () {
        var result = AfColl.ReadKv.parse('a=1\na=2');
        expect(result).toEqual({ a: '2' });
      });

      it('returns an empty map for empty input', function () {
        expect(AfColl.ReadKv.parse('')).toEqual({});
      });
    });
  });
}
