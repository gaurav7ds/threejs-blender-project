import * as THREE from "three";

import Experience from "../Experience.js";

export default class Room{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.room = this.resources.items.room
        this.actualRoom = this.room.scene
        console.log(this.actualRoom);
        

        this.setModel();
        
    }
    setModel(){

        this.scene.add(this.actualRoom)
        this.actualRoom.scale.set(.2, .2,.2);
        // this.actualRoom.position.y = -.4
        // this.actualRoom.rotation.y = Math.PI * .25
        this.actualRoom.children.forEach(child=>{
            child.castShadow = true
            child.receiveShadow = true            
            if(child instanceof THREE.Group){
                child.children.forEach((groupChild)=>{
                    groupChild.castShadow = true
                    groupChild.receiveShadow = true
                })
            }

            if(child.name == "computer"){
                child.children[0].material = new THREE.MeshBasicMaterial()
                this.resources.items.screen.flipY = false;
                child.children[0].material.map = this.resources.items.screen

            }
        })
    }
    resize(){   

    }
    update(){
    }
}