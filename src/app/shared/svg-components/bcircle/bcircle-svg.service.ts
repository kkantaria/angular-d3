import { Injectable } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { BaseSvgService } from '../base-svg.service';
import { BaseSvgComponents } from '../BaseSvgComponents';
@Injectable({
    providedIn: 'root'
})
export class BcircleSvgService extends BaseSvgComponents {
    subscription:Subscription;
    startX:number=null;
    startY:number=null;
    constructor(base: BaseSvgService) {
        super(base);
    }
    create(svg,data) {
        console.log(data);
        this.startX=data.x;
        this.startY=data.y;
        var obj=this.base.getSvg().append("ellipse")
        .attr("stroke",this.base.getStroke())
        .attr("stroke-width",this.base.getStrokeWidth())
        .attr("fill","none");
        this.subscription=fromEvent(svg,"mousemove").subscribe(e=>{
            this.setPoints(e);
        });
        this.base.setObjRef(obj);
    }
    setPoints($e){
        if($e.offsetX!==undefined && $e.offsetY!==undefined){
            var avgX=parseInt(this.startX+$e.offsetX)/2;
            var avgY=parseInt(this.startY+$e.offsetY)/2;
            var rx=avgX-this.startX;
            var ry=avgY-this.startY;
            this.setAttr("cx",avgX);
            this.setAttr("cy",avgY);
            this.setAttr("rx",(rx>0?rx:-(rx)).toString());
            this.setAttr("ry",(ry>0?ry:-(ry)).toString());
        }

    }
    close() {
        this.startX=null;
        this.startY=null;
        this.subscription.unsubscribe();
    }
}
