import { LineSvgService } from './../../shared/svg-components/line/line-svg.service';
import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { PolylineSvgService } from '../../shared/svg-components/polyline/polyline-svg.service';
import { CircleSvgService } from '../../shared/svg-components/circle/circle-svg.service';
import { BaseSvgService } from '../../shared/svg-components/base-svg.service';
import { BcircleSvgService } from './../../shared/svg-components/bcircle/bcircle-svg.service';
import { RectangleSvgService } from '../../shared/svg-components/rectangle/rectangle-svg.service';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {
    currentComponetName: string;
    currentObj: any;
    constructor(
        private base:BaseSvgService,
        private pencil:PolylineSvgService,
        private circle:CircleSvgService,
        private bcircle:BcircleSvgService,
        private rectangle:RectangleSvgService,
        private line:LineSvgService,
    ) {
       
    }

    ngOnInit() {
        this.base.setSvg(d3.select("#mysvg"));
        this.currentComponetName = "pencil";
    }
    changeComponent($com) {
        this.currentComponetName = $com;
    }
    changeColor($color){
        this.base.setColor($color);
    }
    changeSize($size){
        console.log($size);
        this.base.setStrokeWidth($size);
    }
    eClick($e) {
        switch (this.currentComponetName) {
            case "circle":
                this.circle.create($e).setAttrs({ "cx": $e.offsetX, "cy": $e.offsetY})
                break;
        }
    }
    eDrop($e) {

    }
    eDragover($e) {

    }
    eMouseup($e) {
        switch (this.currentComponetName) {
            case "pencil":
                this.pencil.close();
                break;
            case "bcircle":
                this.bcircle.close();
                break;
            case "rectangle":
                this.rectangle.close();
                break;
            case "line":
                this.line.close();
                break;            
        }
    }
    eMouseDown($e, $svg) {
        switch (this.currentComponetName) {
            case 'pencil':
                this.pencil.create($svg);
                break;
            case 'bcircle':
                this.bcircle.create($svg,{"x":$e.offsetX,"y":$e.offsetY});
                break;
            case "rectangle":
                this.rectangle.create($svg,{"x":$e.offsetX,"y":$e.offsetY});
                break;
            case "line":
                this.line.create($svg,{"x":$e.offsetX,"y":$e.offsetY});
                break;    
        }
    }
    eMouseLeave() {

    }
    eMouseEnter($e) {

    }
}
