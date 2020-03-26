export interface Observable<T> {
  subscribe(handler: (newVal: T) => void): void
}

class SimpleObservable<T> implements Observable<T> {
  value: T;
  watchers: Array<(newValue: T) => void>
  constructor(initialValue: T) {
    this.value = initialValue;
    this.watchers = [];
  }
  subscribe(handler: (newValue: T) => void) {
    this.watchers.push(handler);
    handler(this.value);
  }
  set(newValue: T) {
    this.value = newValue;
    this.watchers.forEach(w => w(this.value));
  }
}
export default SimpleObservable;