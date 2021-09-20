import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { GetData } from "src/app/actions/app.action";
import { DesignutilityService } from "src/app/designutility.service";
import {tap} from 'rxjs/operators';

export class AppStateModel{
    data:any;
}

@State<AppStateModel>({
    name:'appstate',
    defaults:{
        data:[]
    }
})

@Injectable()
export class AppState<T,ID>{
    constructor(private _du:DesignutilityService<T,ID>){}

    @Selector()
    static getStateData<T>(state:AppStateModel):T{
        return state.data;
    }
    @Action(GetData)
    insertDataIntoState(ctx:StateContext<AppStateModel>,{endpoint}:GetData){
        return this._du.getData(endpoint).pipe(tap(returnData=>{
            const state=ctx.getState();
            ctx.setState({
                ...state,
                data:returnData
            })
        }))
    }
}