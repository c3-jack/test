/**
 * Unit tests for AfNet.JoinUrl.
 */
function testAll() {
  describe('AfNet.JoinUrl', function () {
    describe('#join', function () {
      it('joins a base with no trailing slash and a path with no leading slash', function () {
        expect(AfNet.JoinUrl.join('http://example.com', 'path')).toEqual('http://example.com/path');
      });

      it('does not duplicate the slash when base has a trailing slash', function () {
        expect(AfNet.JoinUrl.join('http://example.com/', 'path')).toEqual('http://example.com/path');
      });

      it('does not duplicate the slash when path has a leading slash', function () {
        expect(AfNet.JoinUrl.join('http://example.com', '/path')).toEqual('http://example.com/path');
      });

      it('collapses multiple slashes at the seam into exactly one', function () {
        expect(AfNet.JoinUrl.join('http://example.com/', '//path')).toEqual('http://example.com/path');
      });

      it('preserves internal slashes elsewhere in base and path', function () {
        expect(AfNet.JoinUrl.join('http://example.com/api/', 'v1/users')).toEqual('http://example.com/api/v1/users');
      });

      it('returns base unchanged with no trailing separator when path is empty', function () {
        expect(AfNet.JoinUrl.join('http://example.com', '')).toEqual('http://example.com');
      });

      it('returns a leading-slash path when base is empty', function () {
        expect(AfNet.JoinUrl.join('', 'path')).toEqual('/path');
      });
    });
  });
}
