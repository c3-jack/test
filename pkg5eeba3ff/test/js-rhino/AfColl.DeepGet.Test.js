/**
 * Unit tests for AfColl.DeepGet.
 */
function testAll() {
  describe('AfColl.DeepGet', function () {
    describe('#get', function () {
      it('resolves a nested value along a multi-segment path', function () {
        expect(AfColl.DeepGet.get({ a: { b: { c: 1 } } }, 'a.b.c')).toEqual(1);
      });

      it('indexes into arrays using a numeric segment', function () {
        expect(AfColl.DeepGet.get({ a: [10, 20] }, 'a.1')).toEqual(20);
      });

      it('returns undefined when an intermediate segment is missing', function () {
        expect(AfColl.DeepGet.get({ a: { b: 1 } }, 'a.x.y')).toBeUndefined();
      });

      it('returns undefined when obj is null', function () {
        expect(AfColl.DeepGet.get(null, 'a.b')).toBeUndefined();
      });

      it('does not mutate the input object', function () {
        var input = { a: { b: 1 } };
        AfColl.DeepGet.get(input, 'a.b');
        expect(input).toEqual({ a: { b: 1 } });
      });

      it('throws when given an empty path', function () {
        expect(function () {
          AfColl.DeepGet.get({ a: 1 }, '');
        }).toThrow();
      });
    });
  });
}
