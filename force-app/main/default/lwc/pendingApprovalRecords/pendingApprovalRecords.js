import { LightningElement, wire } from 'lwc';
import getPendingApprovalRecords from '@salesforce/apex/PendingApprovalRecordsController.getPendingApprovalRecords';

export default class PendingApprovalRecords extends LightningElement {
    records;

    @wire(getPendingApprovalRecords)
    wiredRecords({ data, error }) {
        if (data) {
            this.records = data;
        } else if (error) {
            // Handle error, e.g., display an error message
            console.error(error);
        }
    }
}
