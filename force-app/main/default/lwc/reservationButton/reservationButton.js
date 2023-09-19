// RedirectButton.js
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class RedirectButton extends NavigationMixin(LightningElement) {
    navigateToPage() {
        // Define the target page's URL or PageReference
        const pageReference = {
            type: 'standard__webPage',
            attributes: {
                url: 'https://resilient-raccoon-pafsil-dev-ed.trailblaze.lightning.force.com/lightning/o/Reservation__c/new?count=1&nooverride=1&useRecordTypeCheck=1&navigationLocation=LIST_VIEW&uid=169406500955960492&backgroundContext=%2Flightning%2Fo%2FReservation__c%2Flist%3FfilterName%3D00B5j00000Uc0pSEAR' // Replace with the actual target page URL
            }
        };

        // Navigate to the target page
        this[NavigationMixin.Navigate](pageReference);
    }
}