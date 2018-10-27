import { Injectable } from '@angular/core';
import { BaseSvgService } from '../base-svg.service';
import { BaseSvgComponents } from '../BaseSvgComponents';

@Injectable({
  providedIn: 'root'
})
export class CircleSvgService extends BaseSvgComponents{
  constructor(base:BaseSvgService){
    super(base);
  }
  create($e) {
    var circle=this.base.getSvg().append("circle").attr("fill",this.base.getColor()).attr("r",this.base.getStrokeWidth()*5);
    this.base.setObjRef(circle);
    return this;
  }
  close() {
    
  }

}
