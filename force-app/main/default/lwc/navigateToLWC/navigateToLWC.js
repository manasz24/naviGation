import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToLWC extends NavigationMixin(LightningElement) {

    navigateToLWC(){

        var defination={
            componentDef:'c:navigateToTarget',
            attributes:{
                Manas:'123456'
            }
        }

        this[NavigationMixin.Navigate]({
                type:'standard__webPage',
                attributes:{
                    url:'/one/one.app#'+btoa(JSON.stringify(defination))

                } 
        })





    }


}