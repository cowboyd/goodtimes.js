import Day from 'goodtimes/day';

describe('Day', function() {
  var day, birthdate;
  beforeEach(function() {
    birthdate = new Date(1976,6,16);
    day = new Day(birthdate);
  });
  it('can be constructed from a JS Date', function() {
    expect(day.value).to.equalDate(birthdate);
  });
  it('uses now as the default', function() {
    expect(new Day().value).to.equalDate(new Date());
  });
  it('has a tomorrow', function() {
    expect(day.tomorrow.value).to.equalDate(new Date(1976,6,17));
  });
  it('has a yesterday', function() {
    expect(day.yesterday.value).to.equalDate(new Date(1976, 6, 15));
  });
});
