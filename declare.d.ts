/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare interface IPlace {
    left: number;
    top: number;
    width: number;
    height: number;
    status: 'reserved' | 'notReserved' | 'inaccessible';
    id: string;
}
