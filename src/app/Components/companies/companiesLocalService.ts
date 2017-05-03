import { Company } from '../../Models/Company';


export /**
 * companiesLocalService
 */
    class companiesLocalService {


     
    private _companies: Company[];
    public get companies(): Company[] {
        return this._companies;
    }
    public set companies(companyList: Company[]) {
        this._companies = companyList;
    }

    constructor() {

    }
}