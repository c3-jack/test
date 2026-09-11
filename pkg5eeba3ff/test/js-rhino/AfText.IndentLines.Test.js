function testAll() {
  describe('AfText.IndentLines', function () {
    it('indents a single line with the given number of spaces', function () {
      expect(AfText.IndentLines.indent('hello', 2)).toEqual('  hello');
      expect(AfText.IndentLines.indent('hello', 0)).toEqual('hello');
    });

    it('indents every line of a multi-line string, including blank lines', function () {
      var input = 'a\n\nb';
      expect(AfText.IndentLines.indent(input, 3)).toEqual('   a\n   \n   b');
    });

    it('throws an error when spaces is negative', function () {
      expect(function () {
        AfText.IndentLines.indent('hello', -1);
      }).toThrowError();
    });

    it('throws an error when input is null or undefined', function () {
      expect(function () {
        AfText.IndentLines.indent(null, 2);
      }).toThrowError();
      expect(function () {
        AfText.IndentLines.indent(undefined, 2);
      }).toThrowError();
    });
  });
}
