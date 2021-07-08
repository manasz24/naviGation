import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToRelatedRecord extends NavigationMixin(LightningElement) {

    navigateToRelated(){
        this[NavigationMixin.Navigate]({

            type:'standard__recordRelationshipPage',
            attributes:{
                recordId:'0016D00000UJsfrQAD',
                objectApiName:'Account',
                relationshipApiName:'Contacts',
                actionName:'view'
            }



        })



    }


}