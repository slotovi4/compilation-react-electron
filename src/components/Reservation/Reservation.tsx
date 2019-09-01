import * as React from 'react';
import { cn } from '@bem-react/classname';
import './Reservation.scss';

const Reservation = () => {
    const initialState: IState = {
        imgLoaded: false
    };
    const [imgLoaded, setImgLoaded] = React.useState(initialState.imgLoaded);
    const canvasEl = React.useRef<HTMLCanvasElement>(null);
    const img = new Image();
    const style = cn('Reservation');

    React.useEffect(() => {
        if (canvasEl.current) {
            const ctx = canvasEl.current.getContext('2d');
            img.src = 'img/1.jpg';
            img.alt = 'reservation_image';
            img.addEventListener('load', () => {
                if (ctx && canvasEl.current) {
                    const x = (canvasEl.current.width - img.width) * 0.5;
                    const y = (canvasEl.current.height - img.height) * 0.5;

                    ctx.drawImage(img, x, y);
                    setImgLoaded(true);
                }
            });
        }
    });

    return (
        <div className={style('ImageContainer')}>
            {!imgLoaded && <span>Loading...</span> }
            <canvas ref={canvasEl} width={800} height={400}></canvas>
        </div>
    );
};

export default Reservation;

interface IState {
    imgLoaded: boolean;
}
