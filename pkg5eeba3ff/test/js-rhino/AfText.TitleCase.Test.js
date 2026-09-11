/**
 * Unit tests for AfText.TitleCase.
 */
function testAll() {
  describe('AfText.TitleCase', function () {
    describe('#convert', function () {
      it('capitalizes the first letter of each lowercase word', function () {
        var result = AfText.TitleCase.convert('hello world');
        expect(result).toEqual('Hello World');
      });

      it('lower-cases the remainder of an all-caps word', function () {
        var result = AfText.TitleCase.convert('HELLO WORLD');
        expect(result).toEqual('Hello World');
      });

      it('normalizes mixed-case words in a longer sentence', function () {
        var result = AfText.TitleCase.convert('the QUICK brown FOX');
        expect(result).toEqual('The Quick Brown Fox');
      });

      it('preserves internal whitespace runs between words', function () {
        var result = AfText.TitleCase.convert('  multiple   spaces  ');
        expect(result).toEqual('  Multiple   Spaces  ');
      });

      it('returns an empty string for an empty string input', function () {
        var result = AfText.TitleCase.convert('');
        expect(result).toEqual('');
      });
    });
  });
}
