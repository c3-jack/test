/**
 * Unit tests for AfText.DedupeLines.
 */
function testAll() {
  describe('AfText.DedupeLines', function () {
    describe('#dedupe', function () {
      it('removes later duplicate lines, keeping the first occurrence', function () {
        var result = AfText.DedupeLines.dedupe('a\nb\na\nc');
        expect(result).toEqual('a\nb\nc');
      });

      it('collapses a run of identical lines to a single line', function () {
        var result = AfText.DedupeLines.dedupe('a\na\na');
        expect(result).toEqual('a');
      });

      it('treats lines differing only in case as distinct', function () {
        var result = AfText.DedupeLines.dedupe('Line\nline\nLine');
        expect(result).toEqual('Line\nline');
      });

      it('keeps the first blank line and drops later blank lines', function () {
        var result = AfText.DedupeLines.dedupe('line1\n\nline1\n\nline2');
        expect(result).toEqual('line1\n\nline2');
      });

      it('returns an empty string for an empty string input', function () {
        var result = AfText.DedupeLines.dedupe('');
        expect(result).toEqual('');
      });

      it('returns the input unchanged when it has no duplicate lines', function () {
        var result = AfText.DedupeLines.dedupe('a\nb\nc');
        expect(result).toEqual('a\nb\nc');
      });
    });
  });
}
