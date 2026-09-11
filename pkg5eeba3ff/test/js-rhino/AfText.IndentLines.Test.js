/**
 * Unit tests for AfText.IndentLines.
 */
function testAll() {
  describe('AfText.IndentLines', function () {
    describe('#indent', function () {
      it('prefixes every line of a multi-line string with the given number of spaces', function () {
        expect(AfText.IndentLines.indent('a\nb', 2)).toEqual('  a\n  b');
      });

      it('indents a single-line string', function () {
        expect(AfText.IndentLines.indent('single', 4)).toEqual('    single');
      });

      it('indents blank lines produced by consecutive newlines', function () {
        expect(AfText.IndentLines.indent('a\n\nb', 2)).toEqual('  a\n  \n  b');
      });

      it('returns input unchanged when spaces is zero', function () {
        expect(AfText.IndentLines.indent('a\nb', 0)).toEqual('a\nb');
      });

      it('returns input unchanged when spaces is negative', function () {
        expect(AfText.IndentLines.indent('a\nb', -3)).toEqual('a\nb');
      });

      it('returns a string of spaces for empty input with positive spaces', function () {
        expect(AfText.IndentLines.indent('', 3)).toEqual('   ');
      });
    });
  });
}
