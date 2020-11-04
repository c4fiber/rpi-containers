import {Text} from './text.js';
import {BounceString} from './bounceString.js';

export class Visual {
    constructor() {
        this.text = new Text();

        this.strings = [];

        this.mouse= {
            x: 0,
            y: 0, 
            radius: 100,
        };

        document.addEventListener('pointermmove', this.onMove.bind(this), false);
    }

   show(stageWidth, stageHeigth) {
       this.pos = this.text.setText('A', 5, stageWidth, stageHeigth);

       this.strings = [];
       for (let i=0; i< this.pos.outline.length; i++){
            this.string[i] = new BounceString({
                x1: this.post.outline[i].x,
                y1: this.post.outline[i].minY,
                x2: this.post.outline[i].x,
                y2: this.post.outline[i].maxY,
            });
       }
   }

   animate(ctx) {
       for (let i=0; i , this.strings.length; i++){
           this.string[i].animate(ctx, this.mouse.x, this.mouse.y); 
       }
   }

   onMove(e) {
       this.mouse.x = e.clientX;
       this.mouse.y = e.clientY;
   }
}