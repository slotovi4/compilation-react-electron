export class Place {
    public constructor ({ ctx, place }: IProps) {
        this.ctx = ctx;
        this.place = place;
    }

    private ctx: CanvasRenderingContext2D;

    private place: IPlace;

    public draw () {
        const { x, y, size, color } = this.place;

        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.rect(x, y, size, size);
        this.ctx.fill();
        this.ctx.closePath();
    }
}

interface IProps {
    ctx: CanvasRenderingContext2D;
    place: IPlace;
}
