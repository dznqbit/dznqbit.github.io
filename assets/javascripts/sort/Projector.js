'use strict';

import { FrameAction, FrameLabel } from 'sort/Frame';
import Frame from 'sort/Frame';

// Projects the film onto the data.
export default class Projector {
  /*
   * @data Array: Vue-bound data
   */
  constructor(data) {
    this.data = data

    this.film = null

    this.labels = [FrameLabel.Current, FrameLabel.Compared, FrameLabel.Label0]

  }

  get frames() { return this.film.frames }

  get frameIndex() { return this.data.frameIndex }
  set frameIndex(v) { this.data.frameIndex = v }

  get playbackTimer() { return this._playbackTimer }
  set playbackTimer(v) { 
    this._playbackTimer = v;
    this.data.isPlaying = this.isPlaying;
  }

  get isPlaying() { return this.playbackTimer != null }
  get values() { return this.data.values }

  /*
   * @film Film:  the Film to project
   */
  loadFilm(film) {
    this.film = film;

    // Clear existing values
    while (this.values.length > 0) { this.values.pop(); }

    // Populate new values
    var _this = this;
    this.film.data.forEach(function(n) {
      _this.values.push({
        value: n
      });
    });

    this.frameIndex = 0;
  }

  play() {
    if (!this.isPlaying) {
      this.playbackTimer = setInterval(
        () => this._continuePlayback(), 
        100
      );
    }
  }

  stop() {
    if (this.isPlaying) {
      clearTimeout(this.playbackTimer);
      this.playbackTimer = null;
    }
  }

  seek(frameIndex) {
    while (this.frameIndex < frameIndex) { this.nextFrame() }
    while (this.frameIndex > frameIndex) { this.prevFrame() }
  }

  nextFrame() {
    if (this.frameIndex >= this.frames.length) {
      console.log("No frames available (" + this.frames.length + ")") 
      return
    }

    this._playFrame(this.frames[this.frameIndex])
    this.frameIndex += 1
  }

  prevFrame() {
    const frames = this.film.frames;

    if (this.frameIndex <= 0) {
      console.log("No frames available")
      return
    }

    this.frameIndex -= 1;
    this._playFrame(frames[this.frameIndex]);
  }

  // select with optional label
  select(index, label) { this._updateValue(index, label, true); } 

  // clear selection on index with optional 
  clear(index, label)  { this._updateValue(index, label, false); } 

  // clear all selections
  clearAll(label) {
    if (label) {
      this.values.forEach(x => x[label] = false)
    } else {
      this.labels.forEach(label => this.clearAll(label))
    }
  }

  // swap i and j
  swap(i, j) {
    if (this.values.length <= i || this.values.length < j) { throw "Index out of range"; }

    var side = this.values[i];
    this.values[i] = this.values[j];
    this.values[j] = side;
  }

  _updateValue(index, label, c) {
    var indexIsArray = index.length != undefined;

    if (indexIsArray) {
      var indexStart = index[0];
      var indexEnd = index[1];

      for (var i = indexStart; i <= indexEnd; ++i) { this._updateValue(i, label, c); }
    } else {
      this.values[index][label || 'current'] = c;
    }
  }

  _playFrame(frame) {
    switch(frame.action) {
      case FrameAction.Compare:
        console.log(`compare`); 
        /*
        this.clearAll('current')
        this.clearAll('compared')
        this.select(frame.sourceIndex, 'current')
        this.select(frame.targetIndex, 'compared')
        */
        break;

      case FrameAction.Select:
        /*
        this.clearAll(frame.label)
        this.select(frame.sourceIndex, frame.label)
        */
        console.log("Selected " + frame.sourceIndex + " with " + frame.label);
        break;

      case FrameAction.Swap:
        console.log(`swap`);
        // this.swap(frame.sourceIndex, frame.targetIndex)
        break;

      default:
        throw "Unrecognized action \"" + frame.action + "\""
    }
  }

  _continuePlayback() {
    let lastFrameIndex = this.frameIndex
    this.nextFrame()
    if (this.frameIndex == lastFrameIndex) { this.stop() }
  }
}
