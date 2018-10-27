import { Injectable } from '@angular/core';
import { Subscription , fromEvent } from 'rxjs';
import { BaseSvgService } from '../base-svg.service';
import { BaseSvgComponents } from '../BaseSvgComponents';
@Injectable({
  providedIn: 'root'
})
export class PolylineSvgService extends BaseSvgComponents {
  subscription:Subscription;
  points:string="";
  constructor(base:BaseSvgService){
    super(base);
  }
  create(svg) {
    console.log(this.base.getSvg());
      var polyline=this.base.getSvg().append("polyline")
      .attr("stroke",this.base.getStroke())
      .attr("stroke-width",this.base.getStrokeWidth())
      .attr("fill","none");
      this.subscription=fromEvent(svg,"mousemove").subscribe(e=>{
        this.setPoints(e);
      });
      this.base.setObjRef(polyline);
  }  
  setPoints($e){
    if($e.offsetX!==undefined && $e.offsetY!==undefined){
      this.points+=$e.offsetX+","+$e.offsetY+" ";
      this.setAttr("points",this.points);
    }
  }
  close() {
    this.points="";
    this.subscription.unsubscribe();
  }
}
