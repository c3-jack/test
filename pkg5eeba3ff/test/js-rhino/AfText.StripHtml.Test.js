function testAll() {
  describe('AfText.StripHtml', function () {
    it('removes simple and nested tags, keeping text content', function () {
      expect(AfText.StripHtml.strip('<p>Hello <b>world</b></p>')).toBe('Hello world');
      expect(AfText.StripHtml.strip('<div class="x">A &amp; B</div>')).toBe('A &amp; B');
    });

    it('removes self-closing/void tags without altering surrounding text', function () {
      expect(AfText.StripHtml.strip('line one<br/>line two')).toBe('line oneline two');
    });

    it('returns the input unchanged when there are no tags', function () {
      expect(AfText.StripHtml.strip('no tags here')).toBe('no tags here');
    });

    it('returns an empty string for empty input', function () {
      expect(AfText.StripHtml.strip('')).toBe('');
    });

    it('strips tags regardless of case and attributes', function () {
      expect(AfText.StripHtml.strip('<STRONG class="a">text</STRONG>')).toBe('text');
      expect(AfText.StripHtml.strip('<img src="x.png" alt="y"/>after')).toBe('after');
    });
  });
}
