import lodash from 'lodash';
import Film from 'sort/Film';
import Frame from 'sort/Frame';

export default class BubbleSort {
  constructor(data) {
    this.name = "Bubble Sort";
    this.data = data;

    // State data
    this.i = 0;
    this.max = this.data.length;
    this.swapped = false;
    this.complete = false;
  }

  get film() {
    let frames = _.range(32).map((n) => Frame.Select(n, 'current'));
    return new Film(this.data, frames);
  }

  next() {
    var i = this.i;
    var j = i + 1;
    var cmp = this.app.compare(i, j);

    if (cmp == Compare.GT) {
      this.app.swap(i, j);
      this.swapped = true;
    }

    this.i += 1;

    if (this.i >= this.max - 1) {
      if (this.swapped) {
        this.i = 0;
        this.swapped = false;
        this.max -= 1;
      } else {
        this.complete = true;
      }
    }
  }
}
