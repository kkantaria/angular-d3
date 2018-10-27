import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BaseSvgService {
    private color: string="black";
    private stroke: string="black";
    private strokeWidth: string="2";
    private objRef: any;
    private svg: any;

    setSvg(svg){
        console.log(svg);
        this.svg=svg;
    }
    getSvg(){
        return this.svg;
    }
    setColor(color){
        this.stroke=color;
        this.color=color;
    }
    getColor(){
        return this.color;
    }
    setStroke(stroke){
        this.stroke=stroke;
    }
    getStroke(){
        return this.stroke;
    }
    setStrokeWidth(strokeWidth){
        this.strokeWidth=strokeWidth;
    }
    getStrokeWidth(){
        return this.strokeWidth;
    }
    setObjRef(objRef){
        this.objRef=objRef;
    }
    getObjRef(){
        return this.objRef;
    }

}
