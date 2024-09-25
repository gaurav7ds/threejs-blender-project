import * as THREE from "three";

import { EventEmitter } from "events";

export default class Time extends EventEmitter{
    constructor(){
        super();
        this.clock = new THREE.Clock();
        this.time = 0;
        this.update();
    }

    update(){
        const elapsedTime = this.clock.getElapsedTime();
        this.time = elapsedTime;
        this.emit('update');
        window.requestAnimationFrame(() => this.update())
    }
}