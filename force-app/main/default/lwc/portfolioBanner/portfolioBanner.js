import { LightningElement, wire, api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import FULL_NAME from '@salesforce/schema/Portfolio__c.Full_Name__c';
import COMPANY_LOCATION from '@salesforce/schema/Portfolio__c.Company_Location__c';
import COMPANY_NAME from '@salesforce/schema/Portfolio__c.Company_Name__c';
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c';

export default class PortfolioBanner extends LightningElement {
    
    @api recordId 
    // = 'a045i00000OOQBEAA5';
    @api linkedinUrl
    //  = 'https://www.linkedin.com/in/aasthaverma08';
    @api githubUrl 
    // = 'https://github.com/aasthavermacapg';
    @api trailheadUrl
    //  = 'https://www.salesforce.com/trailblazer/averma393';

    userPic = `${PortfolioAssets}/PortfolioAssets/userPic.jpeg`;
    linkedIn = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`;
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`;
    trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`;

    @wire(getRecord, {recordId : '$recordId', fields : [FULL_NAME, COMPANY_LOCATION, COMPANY_NAME, DESIGNATION]})
    portfolioData
    // portfolioHandler({data, error}){
    //     if(data){
    //         console.log("record data", JSON.stringify(data));
    //     }
    //     if(error){
    //         console.error("error", error);
    //     }
    // }
    get fullName(){
        return getFieldValue(this.portfolioData.data, FULL_NAME);
    }
    get companyLocation(){
        return getFieldValue(this.portfolioData.data, COMPANY_LOCATION);
    }
    get companyName(){
        return getFieldValue(this.portfolioData.data, COMPANY_NAME);
    }
    get designation(){
        return getFieldValue(this.portfolioData.data, DESIGNATION);
    }

}