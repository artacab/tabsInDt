import { LightningElement, track, wire } from 'lwc';
import retrieveContactRecords from '@salesforce/apex/DataController.retrieveContactRecords';
import retrieveOpportunityRecords from '@salesforce/apex/DataController.retrieveOpportunityRecords';
 
export default class ParentCmpLwc extends LightningElement {
      
    @track accountId;
    @track records;
    @track oppRecords;
    @track errorMsg;  

    currentContactTab = true;
    currentOpsTab = false;

    handleContactTab() {
      this.currentContactTab = true;
      this.currentOpsTab = false;
    }
    handleOpsTab() {
      this.currentContactTab = false;
      this.currentOpsTab = true;
    }
    
    @wire (retrieveContactRecords, {accId:'$accountId'})
      wireConRecord({error,data}){
        if(data){
          this.records = data;     
          this.errorMsg = undefined;    
        }else{         
          this.errorMsg = error;
          this.records = undefined;
        }
      }
    
    @wire (retrieveOpportunityRecords, {accId:'$accountId'})
      wireOppRecord({error,data}){
        if(data){
          this.oppRecords = data;     
          this.errorMsg = undefined;    
        }else{         
          this.errorMsg = error;
          this.oppRecords = undefined;
        }
      }
 
    handleChangeAction(event){
      this.accountId = event.detail;
    }
}