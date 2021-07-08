import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {

    navigateToViewMode(){
        
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes :{
                recordId:'0036D00000OVs8wQAD',
                objectApiName:'Contact',
                actionName:'view'
            }


        })


    }

    navigateToEditMode(){
        
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes :{
                recordId:'0036D00000OVs8wQAD',
                objectApiName:'Contact',
                actionName:'edit'
            }


        })


    }



}