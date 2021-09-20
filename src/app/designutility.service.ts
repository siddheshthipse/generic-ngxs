import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModelDesignUtility } from './models/m_service';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService<T,ID> implements ModelDesignUtility<T,ID>{

  constructor(private http:HttpClient) { }

  getData(endpoint:string){
    return this.http.get<T[]>(endpoint);
  }
}
