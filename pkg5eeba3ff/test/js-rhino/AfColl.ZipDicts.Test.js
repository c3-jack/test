/**
 * Unit tests for AfColl.ZipDicts.
 */
function testAll() {
  describe('AfColl.ZipDicts', function () {
    describe('#zip', function () {
      it('zips equal-length key and value arrays into an object', function () {
        var result = AfColl.ZipDicts.zip(['a', 'b', 'c'], [1, 2, 3]);
        expect(result).toEqual({ a: 1, b: 2, c: 3 });
      });

      it('ignores extra trailing values when values is longer than keys', function () {
        var result = AfColl.ZipDicts.zip(['a', 'b'], [1, 2, 3]);
        expect(result).toEqual({ a: 1, b: 2 });
      });

      it('ignores extra trailing keys when keys is longer than values', function () {
        var result = AfColl.ZipDicts.zip(['a', 'b', 'c'], [1, 2]);
        expect(result).toEqual({ a: 1, b: 2 });
      });

      it('keeps the value from the highest index for a duplicate key', function () {
        var result = AfColl.ZipDicts.zip(['a', 'a'], [1, 2]);
        expect(result).toEqual({ a: 2 });
      });

      it('returns an empty object when keys is empty', function () {
        var result = AfColl.ZipDicts.zip([], [1, 2]);
        expect(result).toEqual({});
      });
    });
  });
}
