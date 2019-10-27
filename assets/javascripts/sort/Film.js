'use strict';

export default class Film {
    /*
     * @data Array[Number]: the unsorted list
     * @frames Array[Frame]: the frames to playback
     */
    constructor(data, frames) {
        this.data = data;
        this.frames = frames;
    }
}
