public with sharing class DataController {
   
    @AuraEnabled(cacheable=true)
    public static List<Account> retrieveAccountRecords(){
        List<Account> accList = [Select Id, Name, Industry, Contact_Count__c, Opportunity_Count__c From Account limit 10];
        return accList;
    }
 
    @AuraEnabled(cacheable=true)
    public static List<Contact> retrieveContactRecords(string accId){
      List<Contact> conObj = new  List<Contact>();
      List<Contact> conList = [Select Id, FirstName, LastName, AccountId From Contact Where AccountId=:accId];
      for(Contact con:conList){
        conObj.add(con);
      }
      return conObj;
    }

    @AuraEnabled(cacheable=true)
    public static List<Opportunity> retrieveOpportunityRecords(string accId){
      List<Opportunity> oppObj = new  List<Opportunity>();
      List<Opportunity> oppList = [Select Id, Name, AccountId From Opportunity Where AccountId=:accId];
      for(Opportunity opp:oppList){
        oppObj.add(opp);
      }
      return oppObj;
    }
}