/**
 * Created by tatiana.gorbunova on 01.05.2017.
 */
export interface D3ComponentInterface {
    margin: { top: number, bottom: number, left: number, right: number };
    width: number;
    height: number;
    svg: any;
    color: any;

    initSvg();
    clearSvg();
    refreshSvg();
    draw();
}