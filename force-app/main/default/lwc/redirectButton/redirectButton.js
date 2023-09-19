// RedirectButton.js
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class RedirectButton extends NavigationMixin(LightningElement) {
    navigateToPage() {
        // Define the target page's URL or PageReference
        const pageReference = {
            type: 'standard__webPage',
            attributes: {
                url: 'https://resilient-raccoon-pafsil-dev-ed.trailblaze.lightning.force.com/lightning/o/Menu_Item__c/list?filterName=00B5j00000Uc076EAB' // Replace with the actual target page URL
                
            }
        };
        //window.open(url, '_blank').focus();

        // Navigate to the target page
        this[NavigationMixin.Navigate](pageReference);
    }
}