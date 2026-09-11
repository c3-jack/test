function testAll() {
  describe('AfColl.DeepGet', function () {
    it('returns the nested value for a dot-notation path', function () {
      var obj = { a: { b: { c: 42 } } };
      expect(AfColl.DeepGet.get(obj, 'a.b.c')).toBe(42);
    });

    it('returns the nested value for a bracket-notation array index', function () {
      var obj = { a: { b: [10, 20, 30] } };
      expect(AfColl.DeepGet.get(obj, 'a.b[1]')).toBe(20);
    });

    it('returns null when an intermediate segment is missing', function () {
      var obj = { a: {} };
      expect(AfColl.DeepGet.get(obj, 'a.b.c')).toBeNull();
    });

    it('returns null when obj is null', function () {
      expect(AfColl.DeepGet.get(null, 'a.b.c')).toBeNull();
    });

    it('returns obj unchanged when path is an empty string', function () {
      var obj = { a: 1 };
      expect(AfColl.DeepGet.get(obj, '')).toEqual(obj);
    });
  });
}
