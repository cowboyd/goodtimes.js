import moment from 'moment';

export default class Day {
  constructor(value = new Date()) {
    this.value = new Date(value.getFullYear(), value.getMonth(), value.getDate(), 0, 0, 0);
  }

  get tomorrow() {
    return new Day(moment(this.value).add(1, 'days').toDate());
  }

  get yesterday() {
    return new Day(moment(this.value).add(-1, 'days').toDate());
  }
};
