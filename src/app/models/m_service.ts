import { Observable } from "rxjs";

export interface ModelDesignUtility<T,ID>{
    getData(endpoint:string):Observable<T[]>
}