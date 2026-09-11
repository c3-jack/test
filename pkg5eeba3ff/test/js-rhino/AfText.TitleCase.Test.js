/**
 * Unit tests for AfText.TitleCase.
 */
function testAll() {
  describe('AfText.TitleCase', function () {
    describe('#convert', function () {
      it('upper-cases the first letter of each word and lower-cases the rest', function () {
        expect(AfText.TitleCase.convert('hello world')).toEqual('Hello World');
        expect(AfText.TitleCase.convert('HELLO WORLD')).toEqual('Hello World');
      });

      it('preserves non-letter characters and existing whitespace runs', function () {
        expect(AfText.TitleCase.convert('mc3 io-t')).toEqual('Mc3 Io-t');
        expect(AfText.TitleCase.convert('  multiple   spaces ')).toEqual('  Multiple   Spaces ');
      });

      it('returns an empty string when given an empty string', function () {
        expect(AfText.TitleCase.convert('')).toEqual('');
      });
    });
  });
}
