import { BaseSvgService } from './base-svg.service';
export abstract class BaseSvgComponents {
    abstract create($e);
    abstract close();
    base;
    constructor(base){
        this.base=base
    }
    setAttr(key,val){
        this.base.getObjRef().attr(key,val);
    }
    setAttrs($data){
        for(var key in $data)
        {
            this.base.getObjRef().attr(key,$data[key]);
        }
    }
}