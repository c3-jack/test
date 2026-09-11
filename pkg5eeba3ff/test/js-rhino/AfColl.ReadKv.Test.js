/**
 * Unit tests for AfColl.ReadKv.
 */
function testAll() {
  describe('AfColl.ReadKv', function () {
    describe('#parse', function () {
      it('parses comma-separated key=value pairs into an object', function () {
        expect(AfColl.ReadKv.parse('a=1,b=2,c=3')).toEqual({ a: '1', b: '2', c: '3' });
      });

      it('trims whitespace around keys and values', function () {
        expect(AfColl.ReadKv.parse('  a = 1 , b = 2  ')).toEqual({ a: '1', b: '2' });
      });

      it('splits only on the first = so values may contain =', function () {
        expect(AfColl.ReadKv.parse('url=http://x.com?y=1,name=widget')).toEqual({
          url: 'http://x.com?y=1',
          name: 'widget'
        });
      });

      it('treats a segment with no = as a key with an empty string value', function () {
        expect(AfColl.ReadKv.parse('flag,name=widget')).toEqual({ flag: '', name: 'widget' });
      });

      it('keeps the last value when a key appears more than once', function () {
        expect(AfColl.ReadKv.parse('a=1,a=2')).toEqual({ a: '2' });
      });

      it('returns an empty object for empty or whitespace-only input', function () {
        expect(AfColl.ReadKv.parse('')).toEqual({});
        expect(AfColl.ReadKv.parse('   ')).toEqual({});
      });
    });
  });
}
