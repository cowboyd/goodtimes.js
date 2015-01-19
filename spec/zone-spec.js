"use strict";
import Zone from 'goodtimes/zone';

describe("Time Zone", function() {
  var zone;
  describe("with out any timezone specifier", function() {
    beforeEach(function() {
      zone = new Zone();
    });

    it("uses utc", function() {
      expect(zone.year(1976).date).to.equalDate(new Date(Date.UTC(1976,0,0,0,0,0,0,0,0,0)));
    });

  });
  describe("with the local timezone", function() {
    beforeEach(function() {
      zone = Zone.local;
    });
  });


});
