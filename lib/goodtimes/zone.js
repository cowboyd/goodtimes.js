import Year from './year';

export default class Zone {
  year(value) {
    return new Year(this, value);
  }
};
