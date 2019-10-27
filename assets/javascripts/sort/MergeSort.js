'use strict';

class MergeSort {
  constructor(app) {
    this.app = app;
    this.name = "Merge Sort";

    // state
    this.i = 0;
    this.length = this.app.values.length;
    this.complete = false;
    this.stack = [{ function: this._divide, args: [0, this.length] }];
  }

  next() {
    var job = this.stack.pop();

    if (job) {
      job.function.apply(this, job.args);
    } else {
      this.complete = true;
      this.app.clear({ all: true });
    }
  }

  _divide(i, j) {
    var length = j - i;

    if (length <= 1) {
      return;
    }

    var m = i + length / 2;
    
    this.app.clear({ all: true });
    this.app.select(m, { flag0: true });
    this.app.selectRange(i, m, { flag1: true });
    this.app.selectRange(m, j, { flag2: true });

    this.stack.push({ function: this._merge, args: [i, j] });
    this.stack.push({ function: this._divide, args: [i, m] });
    this.stack.push({ function: this._divide, args: [m, j] });
  }

  _merge(i, j) {
    this.app.clear({ all: true });
    this.app.selectRange(i, j, { flag0: true });
    
    var length = j - i;
    var m = i + length / 2;
    
    switch(length) {
      case 1:
        break;
        
      case 2: 
        var c = this.app.compare(i, i + 1, { clear: false });
        
        if (c == Compare.GT) {
          this.app.swap(i, i + 1);
        }
        
        break;
      
      default:
        this.app.selectRange(i, m, { flag1: true });
        this.app.selectRange(m, j, { flag2: true, clear: false });
        
        var side = [];
        
        var iLow = i;
        var iHigh = m;
        
        for(var k = i; k < j; ++k) {
          var c;
          
          if (iHigh < j) {
            c = this.app.compare(iLow, iHigh);
          }
          
          if (iLow < m && (iHigh >= j || (c == Compare.LT || c == Compare.EQ))) {
            side.push(this.app.read(iLow));
            iLow += 1;
          } else {
            side.push(this.app.read(iHigh));
            iHigh += 1;
          }
        }
        
        // Copy back from side to values.
        for (var n = 0; n < length; ++n) {
          this.app.write(i + n, side[n]);
        }
        
        break;
    }
  }
}

module.exports = MergeSort;
