/**
 * Unit tests for AfNet.PathJoin.
 */
function testAll() {
  describe('AfNet.PathJoin', function () {
    describe('#join', function () {
      it('joins simple segments with a single slash', function () {
        var result = AfNet.PathJoin.join(['a', 'b', 'c']);
        expect(result).toEqual('a/b/c');
      });

      it('collapses redundant slashes at segment boundaries', function () {
        var result = AfNet.PathJoin.join(['a/', '/b', 'c/']);
        expect(result).toEqual('a/b/c/');
      });

      it('preserves a leading slash to keep the path absolute', function () {
        var result = AfNet.PathJoin.join(['/a', 'b']);
        expect(result).toEqual('/a/b');
      });

      it('skips empty segments', function () {
        var result = AfNet.PathJoin.join(['a', '', 'b']);
        expect(result).toEqual('a/b');
      });

      it('returns an empty string for an empty parts array', function () {
        var result = AfNet.PathJoin.join([]);
        expect(result).toEqual('');
      });
    });
  });
}
