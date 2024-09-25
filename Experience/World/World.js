import * as THREE from "three";
import gsap from "gsap";
import Experience from "../Experience.js";

import Room from "./Room.js";
import Floor from "./Floor.js";
import Environment from "./Environment.js";
import Controls from "./Controls.js";


export default class World{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.theme = this.experience.theme;

        this.resources.on('ready', ()=>{
            this.environment = new Environment();
            this.room = new Room();
            this.floor = new Floor();
            this.controls = new Controls();
            this.controls.on('update', ()=>{
                this.update()
            })
        })
        this.theme.on('switch',(theme)=>{
            this.switchTheme(theme)
        })
    }
    resize(){   

    }
    update(){
        gsap.to(this.room.actualRoom.rotation, {
            x: this.controls.mouse.y*0.1,
            y: this.controls.mouse.x*0.2,
        })        
    }
    switchTheme(theme){
        if(this.environment){
            this.environment.switchTheme(theme)
        }
    }
}