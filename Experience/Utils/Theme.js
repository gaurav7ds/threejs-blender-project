import { EventEmitter } from "events";
import Experience from "../Experience";
export default class Theme extends EventEmitter{
    constructor(){
        super();
        this.theme = 'light'
        this.experience = new Experience();
        this.toggleBtn = document.querySelector('.toggle-bg')
        this.toggleBall = document.querySelector('.toggle-ball')

        this.toggleBtn.addEventListener('click', ()=>{
            this.changeTheme()
        })
    }

    changeTheme(){
        this.toggleBall.classList.toggle('dark')
        document.body.classList.toggle('dark')
        this.theme = this.theme === 'light' ? 'dark' : 'light'

        this.emit('switch', this.theme)
    }

}