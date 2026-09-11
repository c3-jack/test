/**
 * Unit tests for AfColl.ChunkList.
 */
function testAll() {
  describe('AfColl.ChunkList', function () {
    describe('#chunk', function () {
      it('splits an array into evenly-sized chunks, keeping order', function () {
        var result = AfColl.ChunkList.chunk([1, 2, 3, 4], 2);
        expect(result).toEqual([[1, 2], [3, 4]]);
      });

      it('leaves a shorter final chunk when the length is not evenly divisible', function () {
        var result = AfColl.ChunkList.chunk([1, 2, 3, 4, 5], 2);
        expect(result).toEqual([[1, 2], [3, 4], [5]]);
      });

      it('returns a single chunk when size is greater than or equal to the array length', function () {
        var result = AfColl.ChunkList.chunk([1, 2, 3], 5);
        expect(result).toEqual([[1, 2, 3]]);
      });

      it('returns an empty array for an empty input array', function () {
        var result = AfColl.ChunkList.chunk([], 2);
        expect(result).toEqual([]);
      });
    });
  });
}
