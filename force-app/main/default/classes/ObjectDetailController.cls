public with sharing class ObjectDetailController {
    @AuraEnabled(cacheable=true)
    public static List<Menu_Item__c> getCustomObjectData() {
        return [SELECT Id, Name, Price__c, Category__c FROM Menu_Item__c];
    }
}
