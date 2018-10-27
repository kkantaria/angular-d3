import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { PolylineSvgService } from '../../shared/svg-components/polyline/polyline-svg.service';
import { CircleSvgService } from '../../shared/svg-components/circle/circle-svg.service';
import { BaseSvgService } from '../../shared/svg-components/base-svg.service';
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
        }
    }
    eMouseDown($e, $svg) {
        switch (this.currentComponetName) {
            case 'pencil':
                this.pencil.create($svg);
                break;
        }
    }
    eMouseLeave() {

    }
    eMouseEnter($e) {

    }
}
