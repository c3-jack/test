/**
 * Unit tests for AfText.WordCount.
 */
function testAll() {
  describe('AfText.WordCount', function () {
    describe('#count', function () {
      it('counts the words in a simple space-separated string', function () {
        var result = AfText.WordCount.count('hello world');
        expect(result).toEqual(2);
      });

      it('ignores leading and trailing whitespace', function () {
        expect(AfText.WordCount.count('  leading and trailing  ')).toEqual(3);
      });

      it('treats tabs and newlines as word separators', function () {
        expect(AfText.WordCount.count('one\ttwo\nthree')).toEqual(3);
      });

      it('returns 0 for an empty string', function () {
        expect(AfText.WordCount.count('')).toEqual(0);
      });

      it('returns 0 for a whitespace-only string', function () {
        expect(AfText.WordCount.count('   ')).toEqual(0);
      });

      it('returns 1 for a single word', function () {
        expect(AfText.WordCount.count('single')).toEqual(1);
      });
    });
  });
}
