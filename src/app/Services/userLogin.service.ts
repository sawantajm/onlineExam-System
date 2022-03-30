import { HttpClient } from "@angular/common/http";
import { Inject, Injectable} from "@angular/core";



@Injectable()

export class userLogin{
    constructor(private http:HttpClient)
    {

    }


    readonly url="http://localhost:21332/api/Registration/UserLogin";


    loginuser(logininfo:Array<string>)
    {
        return this.http.post(this.url,{Email:logininfo[0],Password:logininfo[1]},{responseType :'text'})
    }

}