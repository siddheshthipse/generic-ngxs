import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetData } from 'src/app/actions/app.action';
import { DesignutilityService } from '../designutility.service';
import { UserModel } from '../models/m_user';
import { AppState } from '../states/app.state';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Select(AppState.getStateData) $stateData:Observable<UserModel[]>;
  userData:UserModel[];

  endpoint:string="http://localhost:3000/Users";
  constructor(private _du:DesignutilityService<UserModel,number>,private store:Store) { }
  

  ngOnInit(): void {
    this.store.dispatch(new GetData(this.endpoint));
  }

  intoArray(){
    this.$stateData.subscribe((returnData)=>{
      this.userData=returnData;
    })

    console.log("The data is:-")
    console.log(this.userData);
  }

}
