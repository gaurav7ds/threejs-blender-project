import * as THREE from "three";

import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import assets from "./Utils/assets";
import Theme from "./Utils/Theme";

import World from "./World/World";

import Resources from "./Utils/Resources";

import Camera from "./Camera";
import Renderer from "./Renderer";

export default class Experience {
    static instance;
    constructor(canvas) {
        if (Experience.instance) {
            return Experience.instance;
        }
        Experience.instance = this;
        this.canvas = canvas;
        this.theme = new Theme();

        this.scene = new THREE.Scene();
        this.sizes = new Sizes();
        this.camera = new Camera();

        this.renderer = new Renderer();    
        this.time = new Time();
        this.resources = new Resources(assets);
        this.world = new World();
        this.sizes.on('resize', () => {
            this.resize()
        })

        this.time.on('update', () => {
            this.update()
        })  
    }

    update(){
        this.renderer.update()
        this.camera.update() 
    }

    resize(){
        this.renderer.resize()
        this.camera.resize()
    }
}