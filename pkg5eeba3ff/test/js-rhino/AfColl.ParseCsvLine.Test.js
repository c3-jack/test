/**
 * Unit tests for AfColl.ParseCsvLine.
 */
function testAll() {
  describe('AfColl.ParseCsvLine', function () {
    describe('#parse', function () {
      it('splits a simple unquoted line on commas', function () {
        var result = AfColl.ParseCsvLine.parse('a,b,c');
        expect(result).toEqual(['a', 'b', 'c']);
      });

      it('treats commas inside double quotes as part of the field', function () {
        var result = AfColl.ParseCsvLine.parse('"a,b",c');
        expect(result).toEqual(['a,b', 'c']);
      });

      it('unescapes doubled double-quotes inside a quoted field', function () {
        var result = AfColl.ParseCsvLine.parse('"say ""hi""",b');
        expect(result).toEqual(['say "hi"', 'b']);
      });

      it('returns a single empty field for an empty line', function () {
        expect(AfColl.ParseCsvLine.parse('')).toEqual(['']);
      });

      it('preserves empty fields between consecutive commas', function () {
        expect(AfColl.ParseCsvLine.parse('a,,c')).toEqual(['a', '', 'c']);
      });
    });
  });
}
