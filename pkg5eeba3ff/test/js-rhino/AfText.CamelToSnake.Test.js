/**
 * Unit tests for AfText.CamelToSnake.
 */
function testAll() {
  describe('AfText.CamelToSnake', function () {
    describe('#convert', function () {
      it('converts a simple camelCase string to snake_case', function () {
        var result = AfText.CamelToSnake.convert('camelCase');
        expect(result).toEqual('camel_case');
      });

      it('converts a PascalCase string to snake_case', function () {
        var result = AfText.CamelToSnake.convert('PascalCase');
        expect(result).toEqual('pascal_case');
      });

      it('inserts an underscore before each letter of a consecutive-uppercase run', function () {
        expect(AfText.CamelToSnake.convert('HTTPServer')).toEqual('h_t_t_p_server');
      });

      it('leaves an already-snake_case string unchanged', function () {
        expect(AfText.CamelToSnake.convert('already_snake')).toEqual('already_snake');
      });

      it('returns an empty string for an empty input string', function () {
        expect(AfText.CamelToSnake.convert('')).toEqual('');
      });
    });
  });
}
