/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare interface IPlace {
    x: number;
    y: number;
    width: number;
    height: number;
    status: 'reserved' | 'notReserved' | 'inaccessible';
}
