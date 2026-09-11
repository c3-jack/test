/**
 * Unit tests for AfNet.PathJoin.
 */
function testAll() {
  describe('AfNet.PathJoin', function () {
    describe('#join', function () {
      it('joins simple segments with a single slash', function () {
        expect(AfNet.PathJoin.join(['a', 'b', 'c'])).toEqual('a/b/c');
      });

      it('collapses redundant slashes and preserves a leading absolute slash', function () {
        expect(AfNet.PathJoin.join(['/a/', '/b/', 'c'])).toEqual('/a/b/c');
      });

      it('skips empty string segments', function () {
        expect(AfNet.PathJoin.join(['a', '', 'b'])).toEqual('a/b');
      });

      it('returns an empty string for an empty parts array', function () {
        expect(AfNet.PathJoin.join([])).toEqual('');
      });
    });
  });
}
