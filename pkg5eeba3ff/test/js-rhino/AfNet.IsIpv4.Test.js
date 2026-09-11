/**
 * Unit tests for AfNet.IsIpv4.
 */
function testAll() {
  describe('AfNet.IsIpv4', function () {
    describe('#check', function () {
      it('returns true for a well-formed IPv4 address', function () {
        var result = AfNet.IsIpv4.check('192.168.0.1');
        expect(result).toEqual(true);
      });

      it('returns true for the all-zero address', function () {
        var result = AfNet.IsIpv4.check('0.0.0.0');
        expect(result).toEqual(true);
      });

      it('returns true for the all-max address', function () {
        var result = AfNet.IsIpv4.check('255.255.255.255');
        expect(result).toEqual(true);
      });

      it('returns false when an octet is out of range', function () {
        var result = AfNet.IsIpv4.check('256.0.0.1');
        expect(result).toEqual(false);
      });

      it('returns false when an octet is missing', function () {
        var result = AfNet.IsIpv4.check('192.168.0');
        expect(result).toEqual(false);
      });

      it('returns false for an octet with a leading zero', function () {
        var result = AfNet.IsIpv4.check('192.168.0.01');
        expect(result).toEqual(false);
      });

      it('returns false for a CIDR suffix', function () {
        var result = AfNet.IsIpv4.check('192.168.0.1/24');
        expect(result).toEqual(false);
      });

      it('returns false for an IPv6 address', function () {
        var result = AfNet.IsIpv4.check('::1');
        expect(result).toEqual(false);
      });
    });
  });
}
