export default class Year {
  constructor(timezone, value = new Date(Date.UTC()).getFullYear()) {
    this.zone = timezone;
    this.value = value;
  }

  get date() {
    var date = new Date(36000);
    date.setFullYear(this.value);
    return date;
  }
};
