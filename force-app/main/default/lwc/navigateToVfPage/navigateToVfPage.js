import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToVfPage extends NavigationMixin(LightningElement) {
    navigateToVF(){
        this[NavigationMixin.Navigate]({
            type : 'standard__webPage',
            attributes : {
                url: "/apex/lmsVisualForceDemo"
            }
    }).then(generatedUrl=>{
        window.open(generatedUrl)
    })



}

}