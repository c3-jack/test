/**
 * Unit tests for AfText.SnakeToCamel.
 */
function testAll() {
  describe('AfText.SnakeToCamel', function () {
    describe('#convert', function () {
      it('converts a multi-word snake_case string to camelCase', function () {
        expect(AfText.SnakeToCamel.convert('snake_case_value')).toEqual('snakeCaseValue');
      });

      it('converts a kebab-case string to camelCase', function () {
        expect(AfText.SnakeToCamel.convert('already-kebab-case')).toEqual('alreadyKebabCase');
      });

      it('lower-cases a SCREAMING_SNAKE_CASE string', function () {
        expect(AfText.SnakeToCamel.convert('SCREAMING_SNAKE_CASE')).toEqual('screamingSnakeCase');
      });

      it('returns a single word unchanged apart from lower-casing', function () {
        expect(AfText.SnakeToCamel.convert('Single')).toEqual('single');
      });

      it('collapses consecutive and leading/trailing separators', function () {
        expect(AfText.SnakeToCamel.convert('_leading__double_trailing_')).toEqual('leadingDoubleTrailing');
      });

      it('returns an empty string for empty input', function () {
        expect(AfText.SnakeToCamel.convert('')).toEqual('');
      });
    });
  });
}
