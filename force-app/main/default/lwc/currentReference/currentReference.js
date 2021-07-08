import { LightningElement,wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation'
export default class CurrentReference extends LightningElement {
    @wire(CurrentPageReference)
    pageRef

    get currentPageRef(){
        return this.pageRef? JSON.stringify(this.pageRef,null,2):''


    }

}