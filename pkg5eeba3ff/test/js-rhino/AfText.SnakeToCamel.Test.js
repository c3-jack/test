/**
 * Unit tests for AfText.SnakeToCamel.
 */
function testAll() {
  describe('AfText.SnakeToCamel', function () {
    describe('#convert', function () {
      it('converts a multi-segment snake_case string to camelCase', function () {
        var result = AfText.SnakeToCamel.convert('my_variable_name');
        expect(result).toEqual('myVariableName');
      });

      it('returns a single lower-cased segment unchanged when there are no underscores', function () {
        var result = AfText.SnakeToCamel.convert('simple');
        expect(result).toEqual('simple');
      });

      it('skips empty segments from leading and trailing underscores', function () {
        var leading = AfText.SnakeToCamel.convert('_leading_underscore');
        expect(leading).toEqual('leadingUnderscore');

        var trailing = AfText.SnakeToCamel.convert('trailing_underscore_');
        expect(trailing).toEqual('trailingUnderscore');
      });

      it('returns an empty string for an empty input', function () {
        var result = AfText.SnakeToCamel.convert('');
        expect(result).toEqual('');
      });
    });
  });
}
