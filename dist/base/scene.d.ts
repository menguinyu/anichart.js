import { EnhancedCanvasRenderingContext2D } from "../utils/enhance-ctx";
import Ani from "./ani";
import { Component } from "../components";
import { Timer } from "d3-timer";
declare class Scene implements Ani {
    fps: number;
    sec: number;
    totalFrames: number;
    cFrame: number;
    components: Component[];
    canvas: HTMLCanvasElement;
    ctx: EnhancedCanvasRenderingContext2D;
    width: number;
    height: number;
    output: boolean;
    data: any;
    meta: any;
    background: string;
    colorScheme: string[];
    hint: string;
    player: Timer;
    constructor(options?: object);
    addComponent(c: Component): void;
    loadData(path: string | any): Promise<void>;
    private readCsv;
    loadMeta(path: string | any): Promise<void>;
    ready(): void;
    play(): void;
    draw(frame: number): void;
    setOptions(options: object): void;
    calOptions(): void;
    setCanvas(selector?: string): void;
    private initCanvas;
    preRender(): void;
    private drawBackground;
    private drawHint;
}
export { Scene };
