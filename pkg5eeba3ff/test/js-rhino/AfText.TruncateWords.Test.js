/**
 * Unit tests for AfText.TruncateWords.
 */
function testAll() {
  describe('AfText.TruncateWords', function () {
    describe('#truncate', function () {
      it('truncates a string longer than maxWords and appends an ellipsis', function () {
        expect(AfText.TruncateWords.truncate('the quick brown fox jumps', 3)).toEqual('the quick brown ...');
      });

      it('returns the input unchanged when it has fewer words than maxWords', function () {
        expect(AfText.TruncateWords.truncate('the quick brown', 5)).toEqual('the quick brown');
      });

      it('returns the input unchanged when it has exactly maxWords words', function () {
        expect(AfText.TruncateWords.truncate('the quick brown', 3)).toEqual('the quick brown');
      });

      it('collapses repeated whitespace and trims before truncating', function () {
        expect(AfText.TruncateWords.truncate('  multiple   spaces   here  ', 2)).toEqual('multiple spaces ...');
      });

      it('returns an empty string for empty input', function () {
        expect(AfText.TruncateWords.truncate('', 3)).toEqual('');
      });

      it('returns an empty string when maxWords is 0', function () {
        expect(AfText.TruncateWords.truncate('word', 0)).toEqual('');
      });
    });
  });
}
