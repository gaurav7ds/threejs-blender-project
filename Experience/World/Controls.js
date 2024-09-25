
import { EventEmitter } from "events";
import Experience from "../Experience.js";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"
export default class Controls extends EventEmitter{
    constructor(){
        super()
        gsap.registerPlugin(ScrollTrigger)
        this.experience = new Experience();
        this.camera = this.experience.camera;
        this.sizes = this.experience.sizes;
        this.world = this.experience.world;
        this.mouse = {
            x: 0,
            y: 0
        }
        window.addEventListener("mousemove", ()=>{
            this.mouse.x = (event.clientX / this.sizes.width)*2 - 1
            this.mouse.y = (-event.clientY / this.sizes.height)*2 + 1
            this.emit('update')
        })
        this.setAnimation()
    }

    setAnimation(){
        this.timeline1 = new gsap.timeline()
        this.timeline1.to(this.world.room.actualRoom.position, {
            x:()=>{
                return this.sizes.width*0.0015
            },
            scrollTrigger:{
                trigger:'.margin1',
                start:'top bottom',
                scrub:2,
                invalidateOnRefresh:true,
            }
        })
        this.timeline2 = new gsap.timeline()
        this.timeline2.to(this.world.room.actualRoom.position, {
            z:()=>{
                return 2.3
            },
            scrollTrigger:{
                trigger:'.margin2',
                start:'top bottom',
                scrub:2,
                invalidateOnRefresh:true,
            }
        })
        this.timeline2.to(this.world.room.actualRoom.scale, {
            x:.7,
            y:.7,
            z:.7,
            scrollTrigger:{
                trigger:'.margin2',
                start:'top bottom',
                scrub:2,
                invalidateOnRefresh:true,
            }
        })


    }
}