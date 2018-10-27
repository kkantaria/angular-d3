import { Injectable } from '@angular/core';
import { BaseSvgService } from './../base-svg.service';
import { Subscription, fromEvent } from 'rxjs';
import { BaseSvgComponents } from '../BaseSvgComponents';
@Injectable({
    providedIn: 'root'
})
export class LineSvgService extends BaseSvgComponents {
    subscription: Subscription;
    startX: number = null;
    startY: number = null;
    constructor(base: BaseSvgService) {
        super(base);
    }
    create(svg, data) {
        console.log(data);
        this.startX = data.x;
        this.startY = data.y;
        var obj = this.base.getSvg().append("line")
            .attr("stroke", this.base.getStroke())
            .attr("stroke-width", this.base.getStrokeWidth())
            .attr("fill", "none");
        this.subscription = fromEvent(svg, "mousemove").subscribe(e => {
            this.drowLine(e);
        });
        this.base.setObjRef(obj);
    }
    drowLine($e) {
        if ($e.offsetX !== undefined && $e.offsetY !== undefined) {
            var x1 = this.startX;
            var y1 = this.startY;
            var x2 = $e.offsetX;
            var y2 = $e.offsetY;
            if(x1>x2 || y1>y2){
                var x3=x1;
                x1=x2;x2=x3;
                var y3=y1;
                y1=y2;y2=y3;
            }
            this.setAttr("x1", x1);
            this.setAttr("y1", y1);
            this.setAttr("x2", x2);
            this.setAttr("y2", y2);
        }

    }
    close() {
        this.startX = null;
        this.startY = null;
        this.subscription.unsubscribe();
    }
}
