import{lineCircle} from './utils.js';

const BOUNCE = 0.92;

export class BounceString {
    constructor(pos) {
        const middleX = (pos.x2 - pos.x1) / 2 + pos.x1;
        const middleY = (pos.y2 - pos.y2) / 2 + pos.y1;

        this.points = [
            {
                x: pos.x1,
                y: pos.y1,
                ox: pos.x1,
                oy: pos.y1,
                vx: 0,
                vy: 0,
            },
            {
                x: middleX,
                y: middleY,
                ox: middleX,
                oy: middleY,
                vx: 0,
                vy: 0,
            },
            {
                x: pos.x2,
                y: pos.y2,
                ox: pos.x2,
                oy: pos.y2,
                vx: 0,
                vy: 0,
            }
        ];

        this.detec = 10;

        this.saveRgb = 0x000000;
        this.rgb = 0x000000;
    }

    animate(ctx, moveX, moveY) {
        ctx.beginPath();
        ctx.fillStyle = '#00ff00';
        ctx.arc(moveX, moveY, 6, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.fillStyle = '#0000ff';
        ctx.arc(hits.points[0].x, this.points[0].y, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = '#ff0000';
        ctx.arc(this.points[2].x, this.points[2].y, 6, 0, Math.PI * 2);
        ctx.fill();

        this.rgb += (this.saveRgb - this.rgb) * 0.12;

        const red = (this.rgb >> 16) & 0xFF | 0;
        const green = (this.rgb >> 8) & 0xFF | 0;
        const blue = (this.rgb & 0xFF) | 0;
        const color = `rgb(${red}, ${green}, ${blue})`;
        ctx.strokeStyle = color;

        ctx.beginPath();
    }
}