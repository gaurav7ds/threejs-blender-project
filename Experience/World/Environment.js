import * as THREE from "three";
import gsap from "gsap";
import Experience from "../Experience.js";

export default class Environment{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.addSunLight();
        this.addAmbientLight();
    }

    addSunLight(){
        this.sunLight = new THREE.DirectionalLight('#ffffff', 3);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 20;
        this.sunLight.shadow.mapSize.set(2048, 2048);
        this.sunLight.shadow.normalBias = 0.05;

        this.sunLight.position.set(-1.5, 7,3);


        this.scene.add(this.sunLight);
    }

    addAmbientLight(){
        this.ambientLight = new THREE.AmbientLight('#ffffff',1);
        this.scene.add(this.ambientLight);
    }

    switchTheme(theme){
        if(theme === 'dark'){
            gsap.to(this.sunLight.color, {
                r:0.172549,
                g:0.2313725,
                b:0.6862745
            })
            gsap.to(this.ambientLight.color, {
                r:0.172549,
                g:0.2313725,
                b:0.6862745
            })
            gsap.to(this.ambientLight, {
                intensity:.78
            })
            gsap.to(this.sunLight, {
                intensity:.78
            })
        }else{
            gsap.to(this.sunLight.color, {
                r:255/255,
                g:255/255,
                b:255/255
            })
            gsap.to(this.ambientLight.color, {
                r:255/255,
                g:255/255,
                b:255/255
            })
            gsap.to(this.ambientLight, {
                intensity:1
            })
            gsap.to(this.sunLight, {
                intensity:3
            })
        }
    }

}