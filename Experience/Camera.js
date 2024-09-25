import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import Experience from "./Experience";

export default class Camera{
    constructor(){
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.createPerspectiveCamera();
        this.createOrthographicCamera();    
        this.createOrbitControls();
    }
    createOrbitControls(){
        this.controls = new OrbitControls(this.perspectiveCamera, this.canvas)
        this.controls.enableDamping = true
        this.controls.addEventListener( "change", event => {  
            console.log( this.controls.object.position ); 
        })

    }
    createPerspectiveCamera(){
        this.perspectiveCamera = new THREE.PerspectiveCamera(
            35,
            this.sizes.aspectRatio,
            0.1,
            1000
        )
        this.perspectiveCamera.position.z =5;
        this.perspectiveCamera.position.y =2;
        this.scene.add(this.perspectiveCamera)
    }

    createOrthographicCamera(){
        this.frustom = 5
        this.orthographicCamera = new THREE.OrthographicCamera(
            -(this.sizes.aspectRatio * this.frustom)/2,
            (this.sizes.aspectRatio * this.frustom)/2,
            this.frustom/2,
            -this.frustom/2,
            -50,
            50
        )
        this.orthographicCamera.position.y = 3.5;
        this.orthographicCamera.position.z = 5;
        this.orthographicCamera.rotation.x = -Math.PI / 7
        
        this.scene.add(this.orthographicCamera)

    }
    resize(){
        this.perspectiveCamera.aspect = this.sizes.aspectRatio
        this.perspectiveCamera.updateProjectionMatrix()

        this.orthographicCamera.left = -(this.sizes.aspectRatio * this.frustom)/2
        this.orthographicCamera.right = (this.sizes.aspectRatio * this.frustom)/2
        this.orthographicCamera.top = this.frustom/2
        this.orthographicCamera.bottom = -this.frustom/2
        this.orthographicCamera.updateProjectionMatrix()
    }

    update(){
        this.controls.update()
    }
}