'use strict';

class SelectionSort {
  constructor(app) {
    this.app = app;
    this.name = "Selection Sort";
    this.length = this.app.values.length;

    // State
    this.i = 0; // main iterator
    this.j = null; // iterator for find smallest
    this.k = null; // current smallest index
    this.complete = false;
  }

  next() {
    if (this.j != null) {
      this.j += 1;

      if (this.j < this.length) {
        var c = this.app.compare(this.k, this.j);

        if (c == Compare.GT) {
          this.k = this.j;
        }
      } else {
        if (this.k != this.i) this.app.swap(this.i, this.k);
        this.k = null;
        this.j = null;
      }
    } else {
      this.app.clear({ flag0: true });

      this.k = this.i;
      this.j = this.i;

      this.app.select(this.i, { flag0: true });
    }

    if (this.k == null) {
      this.i += 1;
      if (this.i == this.length) {
        this.complete = true;
        this.app.clear({ flag0: true });
      }
    }
  }
}

module.exports = SelectionSort;
