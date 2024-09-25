import * as THREE from "three";

import Experience from "../Experience.js";

export default class Floor{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.setFloor();       
    }
    setFloor(){
        this.geometry = new THREE.PlaneGeometry(100, 100);
        this.material = new THREE.MeshStandardMaterial({
            color: '#ffffff'
        })
        this.plane = new THREE.Mesh(this.geometry, this.material)
        this.plane.rotation.x = -Math.PI * 0.5
        this.plane.receiveShadow = true
        this.plane.position.y = -0.5
        this.scene.add(this.plane)
    }
    resize(){   

    }
    update(){
    }
}