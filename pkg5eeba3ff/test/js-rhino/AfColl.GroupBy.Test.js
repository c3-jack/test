/**
 * Unit tests for AfColl.GroupBy.
 */
function testAll() {
  describe('AfColl.GroupBy', function () {
    describe('#group', function () {
      it('groups items by the stringified value of the given key field, preserving order', function () {
        var items = [
          { type: 'a', v: 1 },
          { type: 'b', v: 2 },
          { type: 'a', v: 3 }
        ];
        var result = AfColl.GroupBy.group(items, 'type');
        expect(Object.keys(result).sort()).toEqual(['a', 'b']);
        expect(result.a).toEqual([{ type: 'a', v: 1 }, { type: 'a', v: 3 }]);
        expect(result.b).toEqual([{ type: 'b', v: 2 }]);
      });

      it('returns an empty map for an empty items array', function () {
        expect(AfColl.GroupBy.group([], 'type')).toEqual({});
      });

      it('groups numeric key values under their stringified form', function () {
        var items = [{ n: 1 }, { n: 1 }, { n: 2 }];
        var result = AfColl.GroupBy.group(items, 'n');
        expect(Object.keys(result).sort()).toEqual(['1', '2']);
        expect(result['1'].length).toEqual(2);
        expect(result['2'].length).toEqual(1);
      });
    });
  });
}
