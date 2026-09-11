/**
 * Unit tests for AfText.CamelToSnake.
 */
function testAll() {
  describe('AfText.CamelToSnake', function () {
    describe('#convert', function () {
      it('inserts an underscore at a lower-to-upper case boundary and lower-cases the result', function () {
        expect(AfText.CamelToSnake.convert('fooBar')).toBe('foo_bar');
        expect(AfText.CamelToSnake.convert('FooBarBaz')).toBe('foo_bar_baz');
      });

      it('splits a run of uppercase letters before the trailing word', function () {
        expect(AfText.CamelToSnake.convert('HTTPServer')).toBe('http_server');
      });

      it('leaves an already snake_case string unchanged aside from case', function () {
        expect(AfText.CamelToSnake.convert('already_snake')).toBe('already_snake');
      });

      it('returns an empty string for an empty input', function () {
        expect(AfText.CamelToSnake.convert('')).toBe('');
      });
    });
  });
}
