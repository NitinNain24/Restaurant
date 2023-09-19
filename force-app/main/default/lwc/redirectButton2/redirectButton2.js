// RedirectButton.js
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class RedirectButton extends NavigationMixin(LightningElement) {
    navigateToPage() {
        // Define the target page's URL or PageReference
        const pageReference = {
            type: 'standard__webPage',
            attributes: {
                url: 'https://resilient-raccoon-pafsil-dev-ed.trailblaze.lightning.force.com/lightning/o/Orders__c/new?count=2&nooverride=1&useRecordTypeCheck=1&navigationLocation=LIST_VIEW&uid=169391095105068163&backgroundContext=%2Flightning%2Fo%2FOrders__c%2Flist%3FfilterName%3DRecent' // Replace with the actual target page URL
            }
        };

        // Navigate to the target page
        this[NavigationMixin.Navigate](pageReference);
    }
}