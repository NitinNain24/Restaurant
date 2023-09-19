import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

import { NavigationMixin } from 'lightning/navigation';

import ACCOUNT_OBJECT from '@salesforce/schema/Orders__c';
//import Selected_Menu_Items from '@salesforce/schema/Orders__c.Selected_Menu_Items__c';
import Menu_Item from '@salesforce/schema/Orders__c.Menu_Item__c';
//import Order_Placing_Date_Time from '@salesforce/schema/Orders__c.Order_Placing_Date_Time__c';
//import Orders_Name from '@salesforce/schema/Orders__c.Name';
import Quantity from '@salesforce/schema/Orders__c.Quantity__c';
//import Total_Amount from '@salesforce/schema/Orders__c.Total_Amount__c';
import User from '@salesforce/schema/Orders__c.User__c';



export default class CreateAccountRecord extends NavigationMixin(LightningElement) {

    objectApiName=ACCOUNT_OBJECT;
    fields = [ Menu_Item, Quantity , User];

    handleSuccess(event){
        const toastEvent=new ShowToastEvent({

            title:"Order has been placed successfully !",
            message: "Order Placed ",
            variant: "success"

        });

        this.dispatchEvent(toastEvent);

        }
        handleCancel() {
            // Navigate to the desired page (e.g., the list view)
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Orders__c',
                    actionName: 'list'
                }
            });
        }

    }