import { LightningElement, api, wire } from 'lwc';
import getAverageRating from '@salesforce/apex/AverageRatingController.getAverageRating';

export default class AverageRating extends LightningElement {
    @api productId; // Pass the Product Id from the parent component

    averageRating;

    @wire(getAverageRating, { productId: '{!Feedback__c.Id}' })
    wiredAverageRating({ data, error }) {
        if (data) {
            this.averageRating = data;
        } else if (error) {
            console.error(error);
        }
    }
}
