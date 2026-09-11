/**
 * Unit tests for AfText.Slugify.
 */
function testAll() {
  describe('AfText.Slugify', function () {
    describe('#slugify', function () {
      it('converts punctuation and spaces into hyphens and lower-cases the result', function () {
        expect(AfText.Slugify.slugify('Hello, World!')).toEqual('hello-world');
      });

      it('strips leading and trailing whitespace/punctuation without leaving stray hyphens', function () {
        expect(AfText.Slugify.slugify('  Trim Me  ')).toEqual('trim-me');
      });

      it('collapses runs of separators and normalizes existing hyphens/underscores', function () {
        expect(AfText.Slugify.slugify('Already--slugged__text')).toEqual('already-slugged-text');
      });

      it('returns an empty string for empty input', function () {
        expect(AfText.Slugify.slugify('')).toEqual('');
      });

      it('returns an empty string for input with no alphanumeric characters', function () {
        expect(AfText.Slugify.slugify('!!!   ---')).toEqual('');
      });
    });
  });
}
