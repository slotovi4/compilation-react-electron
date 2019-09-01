import * as React from 'react';
import { cn } from '@bem-react/classname';
import { Place } from './models/place';
import './Reservation.scss';

const initialState: IState = {
    imgLoaded: false,
    ctx: null,
    canvasW: 800,
    canvasH: 400
};

const Reservation = ({ places }: IProps) => {
    const [imgLoaded, setImgLoaded] = React.useState(initialState.imgLoaded);
    const [ctx, setCtx] = React.useState(initialState.ctx);

    const canvasEl = React.useRef<HTMLCanvasElement>(null);
    const style = cn('Reservation');
    const img = new Image();

    const DrawBackground = () => {
        img.src = 'img/1.jpg';
        img.addEventListener('load', () => {
            if (ctx && canvasEl.current) {
                ctx.drawImage(img, 0, 0);
                setImgLoaded(true);
            }
        });
    };

    const DrawPlace = () => {
        if (ctx) {
            places.map(place => {
                const placeModel = new Place({ ctx, place });
                placeModel.draw();
            });
        }
    };

    const Draw = () => {
        DrawBackground();
        DrawPlace();
    };

    const Animate = () => {
        requestAnimationFrame(() => {
            if (ctx) {
                // ctx.clearRect(0, 0, initialState.canvasW, initialState.canvasH);
                Draw();
            }

            // Animate();
        });
    };

    React.useEffect(() => {
        if (canvasEl.current) {
            const context = canvasEl.current.getContext('2d');
            setCtx(context);
            Animate();
        }
    });

    return (
        <>
            {!imgLoaded && <span>Loading...</span>}
            <div className={style('ImageContainer')}>
                <canvas ref={canvasEl} width={initialState.canvasW} height={initialState.canvasH}></canvas>
            </div>
        </>
    );
};

export default Reservation;

interface IState {
    imgLoaded: boolean;
    ctx: CanvasRenderingContext2D | null;
    canvasW: number;
    canvasH: number;
}

interface IProps {
    places: IPlace[];
}
