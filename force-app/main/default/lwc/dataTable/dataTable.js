import { LightningElement, wire } from 'lwc';
import getCustomObjectData from '@salesforce/apex/ObjectDetailController.getCustomObjectData';

export default class CustomTable extends LightningElement {
    tableData = [];

    @wire(getCustomObjectData)
    wiredTableData({ error, data }) {
        if (data) {
            this.tableData = data;
        } else if (error) {
            console.error(error);
        }
    }
}