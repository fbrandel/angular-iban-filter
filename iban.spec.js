describe('IBAN filter', function() {
  var ibanFilter;

  beforeEach(module('fbr.iban'));

  beforeEach(inject(function(_ibanFilter_) {
    ibanFilter = _ibanFilter_;
  }));

  it('should prettily format IBAN', inject(function(ibanFilter) {
    expect(ibanFilter('DE19123412341234123412')).toBe(
      'DE19 1234 1234 1234 1234 12');
    expect(ibanFilter('DE191234123412341234')).toBe(
      'DE19 1234 1234 1234 1234');
  }));

  it('should return empty string when empty IBAN is given', function() {
    expect(ibanFilter('')).toBe('');
  });
});
