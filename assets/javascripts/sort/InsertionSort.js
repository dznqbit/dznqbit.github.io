'use strict';

class InsertionSort {
  constructor(app) {
    this.name = "Insertion Sort";
    this.app = app;

    // State
    this.i = 0; // main iterator
    this.j = 0; // for finding insertion index of v[i]
    this.k = null; // for keeping track of swap position
    this.complete = false;
  }

  next() {
    if (this.k != null) {
      this.app.swap(this.k, this.k - 1);
      this.k -= 1;
      if (this.k == this.j) {
        this.k = null;
        this.j = this.i;
      }
      return;
    }

    if (this.i == this.j) {
      this.i += 1;
      this.j = 0;
    }

    if (this.i == this.app.values.length) {
      this.complete = true;
      return;
    }

    var c = this.app.compare(this.i, this.j);

    if (c == Compare.LT) {
      this.k = this.i;
    } else {
      this.j += 1;
    }
  }
}

module.exports = InsertionSort;
