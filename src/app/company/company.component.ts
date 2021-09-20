import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetData } from '../actions/app.action';
import { DesignutilityService } from '../designutility.service';
import { CompanyModel } from '../models/m_company';
import { AppState } from '../states/app.state';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  @Select(AppState.getStateData) $stateData:Observable<CompanyModel[]>;
  companyData:CompanyModel[];
  
  endpoint:string='http://localhost:3000/company';
  constructor(private _du:DesignutilityService<CompanyModel,number>,private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetData(this.endpoint));
  }

  intoArray(){
    this.$stateData.subscribe((returnData)=>{
      this.companyData=returnData;
    })

    console.log("The data is:-")
    console.log(this.companyData);
  }

}
