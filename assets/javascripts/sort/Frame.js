'use strict';

import Compare from 'sort/Compare';

export const FrameAction = {
  Compare: Symbol('Compare'),
  Select: Symbol('Select'),
  Swap: Symbol('Swap')
}

export const FrameLabel = {
  Current: Symbol('Current'),
  Compared: Symbol('Compared'),
  Label0: Symbol('Label0')
}

class Frame {
  constructor(action, sourceIndex, targetIndex, label) {
    this.action = action;
    this.sourceIndex = sourceIndex;
    this.targetIndex = targetIndex;
    this.label = label;
  }

  static Compare(sourceIndex, targetIndex) { return new Frame(FrameAction.Compare, sourceIndex, targetIndex) }
  static Swap(sourceIndex, targetIndex) { return new Frame(FrameAction.Swap, sourceIndex, targetIndex) }
  static Select(index, label) { return new Frame(FrameAction.Select, index, null, label) }
}

export default Frame;
