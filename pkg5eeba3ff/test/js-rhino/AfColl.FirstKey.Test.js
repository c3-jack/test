function testAll() {
  describe('AfColl.FirstKey', function () {
    it('returns the first own enumerable key of a plain object', function () {
      expect(AfColl.FirstKey.first({b: 2, a: 1})).toEqual('b');
      expect(AfColl.FirstKey.first({onlyKey: 'value'})).toEqual('onlyKey');
    });

    it('returns the first numeric index of an array as a string', function () {
      expect(AfColl.FirstKey.first(['x', 'y', 'z'])).toEqual('0');
    });

    it('returns null when the object has no keys', function () {
      expect(AfColl.FirstKey.first({})).toBeNull();
      expect(AfColl.FirstKey.first([])).toBeNull();
    });

    it('throws an error when obj is null or undefined', function () {
      expect(function () {
        AfColl.FirstKey.first(null);
      }).toThrowError();
      expect(function () {
        AfColl.FirstKey.first(undefined);
      }).toThrowError();
    });
  });
}
