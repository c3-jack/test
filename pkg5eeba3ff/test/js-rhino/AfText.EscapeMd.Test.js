/**
 * Unit tests for AfText.EscapeMd.
 */
function testAll() {
  describe('AfText.EscapeMd', function () {
    describe('#escape', function () {
      it('escapes emphasis characters (asterisk and underscore)', function () {
        var result = AfText.EscapeMd.escape('*bold* and _italic_');
        expect(result).toEqual('\\*bold\\* and \\_italic\\_');
      });

      it('escapes a numbered-list-like leading period', function () {
        var result = AfText.EscapeMd.escape('1. First item');
        expect(result).toEqual('1\\. First item');
      });

      it('escapes links, code, and blockquote/heading characters', function () {
        var result = AfText.EscapeMd.escape('[text](url) `code` #heading > quote');
        expect(result).toEqual('\\[text\\]\\(url\\) \\`code\\` \\#heading \\> quote');
      });

      it('leaves plain text with no special characters unchanged', function () {
        var result = AfText.EscapeMd.escape('plain text');
        expect(result).toEqual('plain text');
      });

      it('returns the empty string for an empty input', function () {
        var result = AfText.EscapeMd.escape('');
        expect(result).toEqual('');
      });
    });
  });
}
