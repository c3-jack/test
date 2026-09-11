/**
 * Unit tests for AfNet.IsIpv4.
 */
function testAll() {
  describe('AfNet.IsIpv4', function () {
    describe('#check', function () {
      it('returns true for a valid IPv4 address', function () {
        expect(AfNet.IsIpv4.check('192.168.0.1')).toEqual(true);
      });

      it('returns true for the all-zero address', function () {
        expect(AfNet.IsIpv4.check('0.0.0.0')).toEqual(true);
      });

      it('returns true for the max-value address', function () {
        expect(AfNet.IsIpv4.check('255.255.255.255')).toEqual(true);
      });

      it('returns false when an octet exceeds 255', function () {
        expect(AfNet.IsIpv4.check('256.1.1.1')).toEqual(false);
      });

      it('returns false for an octet with a leading zero', function () {
        expect(AfNet.IsIpv4.check('192.168.0.01')).toEqual(false);
      });

      it('returns false when there are too few segments', function () {
        expect(AfNet.IsIpv4.check('192.168.0')).toEqual(false);
      });

      it('returns false when there are too many segments', function () {
        expect(AfNet.IsIpv4.check('192.168.0.1.5')).toEqual(false);
      });

      it('returns false for non-numeric segments', function () {
        expect(AfNet.IsIpv4.check('abc.def.ghi.jkl')).toEqual(false);
      });

      it('returns false for an empty string', function () {
        expect(AfNet.IsIpv4.check('')).toEqual(false);
      });
    });
  });
}
