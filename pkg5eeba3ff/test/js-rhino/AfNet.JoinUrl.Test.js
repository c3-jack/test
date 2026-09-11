/**
 * Unit tests for AfNet.JoinUrl.
 */
function testAll() {
  describe('AfNet.JoinUrl', function () {
    describe('#join', function () {
      it('joins a base with a trailing slash and a path with a leading slash using exactly one slash', function () {
        expect(AfNet.JoinUrl.join('http://a.com/', '/b')).toEqual('http://a.com/b');
      });

      it('joins a base without a trailing slash and a path without a leading slash using exactly one slash', function () {
        expect(AfNet.JoinUrl.join('http://a.com', 'b')).toEqual('http://a.com/b');
      });

      it('joins a base with a trailing slash and a path without a leading slash using exactly one slash', function () {
        expect(AfNet.JoinUrl.join('http://a.com/', 'b')).toEqual('http://a.com/b');
      });

      it('joins a base without a trailing slash and a path with a leading slash using exactly one slash', function () {
        expect(AfNet.JoinUrl.join('http://a.com', '/b')).toEqual('http://a.com/b');
      });
    });
  });
}
