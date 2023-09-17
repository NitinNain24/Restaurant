import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import ACCOUNT_OBJECT from '@salesforce/schema/Reservation__c';
import Abandoning_Time from '@salesforce/schema/Reservation__c.Abandoning_Time__c'
import Number_of_Guests from '@salesforce/schema/Reservation__c.Number_of_Guests__c';
//import Booking_Date from '@salesforce/schema/Reservation__c.Booking_Date__c';
import Booking_Time from '@salesforce/schema/Reservation__c.Booking_Time__c';
import Email from '@salesforce/schema/Reservation__c.Email__c';
import Reservation_Name from '@salesforce/schema/Reservation__c.Name';
import Table_No from '@salesforce/schema/Reservation__c.Table_No__c';
import Phone from '@salesforce/schema/Reservation__c.Phone__c';


//import Email from '@salesforce/schema/Account__c.Email__c';

export default class CreateAccountRecord extends NavigationMixin(LightningElement) {

    objectApiName=ACCOUNT_OBJECT;
    fields = [ Reservation_Name, Email, Phone, Table_No, Number_of_Guests, Booking_Time, Abandoning_Time];

    handleSuccess(event){
        const toastEvent=new ShowToastEvent({

            title:"Reservation has been done successfully !",
            message: "Table Booked ",
            variant: "success"

        });

        this.dispatchEvent(toastEvent);

    }
    handleCancel() {
        // Use the NavigationMixin to navigate to a different page (e.g., the list view)
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Reservation__c',
                actionName: 'list'
            }
        });
    }
}