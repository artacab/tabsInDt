import { api, LightningElement, track, wire } from 'lwc';
import retrieveAccountRecords from '@salesforce/apex/DataController.retrieveAccountRecords';
 
export default class DisplayContactsOnAccountId extends LightningElement {
    @wire (retrieveAccountRecords) accData;
    @track getAccId;
    @api contacttab;
    @api opstab;
     
    handleChangeRadio(event){        
        this.getAccId = event.target.value;
        const myCustomEventItem = new CustomEvent('myeventdemo',{
            detail: this.getAccId
       });
       this.dispatchEvent(myCustomEventItem);
        
    }
}