/**
 * Visualization of the basic sorting algorithms.
 * Also a practice in documentation with http://usejsdoc.org/
 *
 * CLASS STRUCTURE
 * Vue: presentation layer.
 * sort/Projector: reads a @film and updates the @data bound to Vue. 
 * sort/Film: @data to be sorted, and @frames describing how the ordering changes.
 * sort/Frame: 
 */
import 'sort.scss';

import Vue from 'vue';
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

import Frame from 'sort/Frame';
import Film from 'sort/Film';
import Projector from 'sort/Projector';

import BubbleSort from 'sort/BubbleSort';
import InsertionSort from 'sort/InsertionSort';
import SelectionSort from 'sort/SelectionSort';
import MergeSort from 'sort/MergeSort';

let algorithms = {
  Bubble: 'Bubble',
  Insertion: 'Insertion',
  Selection: 'Selection',
  Merge: 'Merge'
};

function newApp() {
  var values = [];
  var data = {
    algorithmName: algorithms.Bubble,
    algorithmNames: [algorithms.Bubble, algorithms.Insertion, algorithms.Selection, algorithms.Merge],
    values: [],
    frameIndex: 0,
    isPlaying: false,
    numComparisons: 0,
    numFrames: 0,
    numSwaps: 0
  };
  var projector = new Projector(data);

  // Return Vue.
  return new Vue({
    el: "#app",
    destroy: function() { this.$destroy(); },

    data: data,

    methods: {
      reset: function() {
        // Halt existing sort.
        this._stop();

        // New Data.
        var data = [];
        for (var i = 0; i < 32; ++i) { data.push(Math.floor(Math.random() * 128)); }

        if (this.algorithmName != 'Bubble') { console.log(`${this.algorithmName} not supported, why not Bubble?`) }

        var algorithm = new BubbleSort(data);
        var film = algorithm.film;

        projector.loadFilm(film);
      },

      selectAlgorithm: function(algorithmName) {
        this.algorithmName = algorithmName;
        this.reset()
      },
      
      firstFrame: function() {
        projector.seek(0)
      },
      prevFrame: function() {
        projector.prevFrame() 
      },

      togglePlayback: function() {
        if (projector.isPlaying) {
          this._stop()
        } else {
          this._play()
        }
      },

      nextFrame: function() { 
        projector.nextFrame() 
      },
      lastFrame: function() {
        projector.seek(projector.frames.length - 1)
      },
      // END PUBLIC METHODS
      _play: function() {
        projector.play()
      },

      _stop: function() {
        projector.stop()
      },
    }
       /*
              compare: function(i, j, options) {
              var defaults = {
              clear: true,
              current: true,
              compared: true
              };

              var opts = Object.assign(defaults, options || {});

              if (opts.clear) {
              this.clear(); 
              }

              this.values[i].current = opts.current;
              this.values[j].compared = opts.compared;
              this.comparisons += 1;

              return compare(this.values[i].value, this.values[j].value);
              },

              read: function(i) { return this.values[i].value },

              select: function(i, options) {
              let defaults = { 
              clear: true, 
              current: true 
              };

              var opts = Object.assign(defaults, options || {});
              if (opts.clear) this.clear();

              var value = this.values[i];
              this.flags.forEach((flag) => value[flag] = opts[flag] || opts.all);
              },

              selectRange: function(range_start, range_end, options) {
              let defaults = {
              clear: true,
              current: true
              };

              var opts = Object.assign(defaults, options || {});
              if (opts.clear) this.clear({ all: true });

              for (var i = range_start; i < range_end; ++i) {
              this.flags.forEach((flag) => this.values[i][flag] = opts[flag]);
              }
              },

              swap: function(i, j) {
              var s = this.values[j].value;
              this.values[j].value = this.values[i].value;
              this.values[i].value = s;
              this.swaps += 1;
              },

              write: function(i, v) {
              if (!v) { console.log("Write A[" + i + "] = " + v) }
              this.values[i].value = v;
              this.swaps += 1;
              },

              _start: function(algorithm) {
              this._stop();
              delete this.algorithm;

              this.swaps = 0;
              this.comparisons = 0;
              this.algorithm_name = algorithm.name;
              this.algorithm = algorithm;

           var c;
           var _this = this;

           c = function() {
             _this.algorithm.next();

             if (algorithm.complete) {
               _this.clear();
             } else {
               _this.algorithmTimer = setTimeout(c, 32);
             }
           };

           c();
         },
         */
  });
}

var app;

document.addEventListener("DOMContentLoaded", function(event) {
  app = newApp();
  app.reset();
  window.app = app;
});
