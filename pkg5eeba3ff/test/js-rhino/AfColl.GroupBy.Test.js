/**
 * Unit tests for AfColl.GroupBy.
 */
function testAll() {
  describe('AfColl.GroupBy', function () {
    describe('#group', function () {
      it('groups items into buckets keyed by the stringified value of the given field', function () {
        var items = [
          { type: 'a', v: 1 },
          { type: 'b', v: 2 },
          { type: 'a', v: 3 }
        ];
        var result = AfColl.GroupBy.group(items, 'type');
        expect(result).toEqual({
          a: [{ type: 'a', v: 1 }, { type: 'a', v: 3 }],
          b: [{ type: 'b', v: 2 }]
        });
      });

      it('preserves the original relative order of items within each bucket', function () {
        var items = [
          { k: 'x', order: 1 },
          { k: 'y', order: 2 },
          { k: 'x', order: 3 },
          { k: 'x', order: 4 }
        ];
        var result = AfColl.GroupBy.group(items, 'k');
        expect(result.x).toEqual([
          { k: 'x', order: 1 },
          { k: 'x', order: 3 },
          { k: 'x', order: 4 }
        ]);
      });

      it('returns an empty map for an empty items array', function () {
        expect(AfColl.GroupBy.group([], 'type')).toEqual({});
      });

      it('groups numeric field values by their string representation', function () {
        var items = [{ n: 1 }, { n: 2 }, { n: 1 }];
        var result = AfColl.GroupBy.group(items, 'n');
        expect(result).toEqual({
          '1': [{ n: 1 }, { n: 1 }],
          '2': [{ n: 2 }]
        });
      });
    });
  });
}
