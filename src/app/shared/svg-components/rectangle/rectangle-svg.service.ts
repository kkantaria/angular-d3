import { Injectable } from '@angular/core';
import { BaseSvgService } from './../base-svg.service';
import { Subscription, fromEvent } from 'rxjs';
import { BaseSvgComponents } from '../BaseSvgComponents';
@Injectable({
    providedIn: 'root'
})
export class RectangleSvgService extends BaseSvgComponents {
    subscription: Subscription;
    startX: number = null;
    startY: number = null;
    constructor(base: BaseSvgService) {
        super(base);
    }
    create(svg, data) {
        console.log(data);
        this.startX=data.x;
        this.startY=data.y;
        var obj=this.base.getSvg().append("rect")
        .attr("stroke",this.base.getStroke())
        .attr("stroke-width",this.base.getStrokeWidth())
        .attr("fill","none")
        .attr("x",this.startX)
        .attr("y",this.startY);
        this.subscription=fromEvent(svg,"mousemove").subscribe(e=>{
            this.drowRect(e);
        });
        this.base.setObjRef(obj);
    }
    drowRect($e){
        if($e.offsetX!==undefined && $e.offsetY!==undefined){
            var ex=this.startX;
            var w=$e.offsetX-this.startX;
            var ey=this.startY;
            var h=$e.offsetY-this.startY;
            if(w<0){
                ex=$e.offsetX;
                w=this.startX-$e.offsetX;
            }
            if(h<0){
                ey=$e.offsetY;
                h=this.startY-$e.offsetY;
            }
            this.setAttr("x",ex);
            this.setAttr("y",ey);
            this.setAttr("width",w);
            this.setAttr("height",h);
        }
    }
    close() {
        this.startX=null;
        this.startY=null;
        this.subscription.unsubscribe();
    }
}