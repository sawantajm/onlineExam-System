import{ Injectable } from "@angular/core";
import{HttpClient} from "@angular/common/http";
import { Registration } from "../Model/Registration.model";


@Injectable()

export class Registerservice
{
    constructor(private http:HttpClient){

    }

   

    readonly url="http://localhost:21332/api/Registration";


getrecords()
{
    
    return this.http.get(this.url);
}

InsertRecord(reg:any)
{
    
    debugger;
  
    
return this.http.post(this.url,reg,{responseType: 'text'});
}
}