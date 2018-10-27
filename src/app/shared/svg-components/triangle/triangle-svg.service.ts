import { Injectable } from '@angular/core';
import { BaseSvgService } from './../base-svg.service';
import { Subscription, fromEvent } from 'rxjs';
import { BaseSvgComponents } from '../BaseSvgComponents';
@Injectable({
  providedIn: 'root'
})
export class TriangleSvgService extends BaseSvgComponents {
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
    var obj=this.base.getSvg().append("polygon")
    .attr("stroke",this.base.getStroke())
    .attr("stroke-width",this.base.getStrokeWidth())
    .attr("fill","none")
    .attr("x",this.startX)
    .attr("y",this.startY);
    this.subscription=fromEvent(svg,"mousemove").subscribe(e=>{
        this.drowTriangle(e);
    });
    this.base.setObjRef(obj);
}
drowTriangle($e){
    if($e.offsetX!==undefined && $e.offsetY!==undefined){
        var x1=($e.offsetX + this.startX)/2;
        var y1=this.startY;
        var x2=$e.offsetX;
        var y2=$e.offsetY;
        var x3=this.startX;
        var y3=$e.offsetY;
        
        this.setAttr("points",x1+","+y1+" "+x2+","+y2+" "+x3+","+y3);
    }

}
close() {
    this.startX=null;
    this.startY=null;
    this.subscription.unsubscribe();
}
}
