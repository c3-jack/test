/**
 * Unit tests for AfColl.ParseCsvLine.
 */
function testAll() {
  describe('AfColl.ParseCsvLine', function () {
    describe('#parse', function () {
      it('splits a simple comma-separated line into fields', function () {
        var result = AfColl.ParseCsvLine.parse('a,b,c');
        expect(result).toEqual(['a', 'b', 'c']);
      });

      it('preserves commas inside a double-quoted field', function () {
        var result = AfColl.ParseCsvLine.parse('a,"b,c",d');
        expect(result).toEqual(['a', 'b,c', 'd']);
      });

      it('unescapes doubled quotes within a quoted field', function () {
        var result = AfColl.ParseCsvLine.parse('a,"say ""hi""",c');
        expect(result).toEqual(['a', 'say "hi"', 'c']);
      });

      it('treats consecutive commas as an empty field', function () {
        var result = AfColl.ParseCsvLine.parse('a,,c');
        expect(result).toEqual(['a', '', 'c']);
      });

      it('returns a single empty field for an empty line', function () {
        var result = AfColl.ParseCsvLine.parse('');
        expect(result).toEqual(['']);
      });
    });
  });
}
