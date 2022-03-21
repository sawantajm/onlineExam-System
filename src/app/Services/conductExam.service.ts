import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";




@Injectable()


export class ConductExamService{
    constructor(private http:HttpClient){

    }


     readonly uri = "http://localhost:51137/Java/Level1";


   readonly url="http://localhost:51137/Java";

   readonly csharpurl="http://localhost:51137/api/Csharpexam/charp1";
   readonly charpput="http://localhost:51137/api/Csharpexam";

    
    getQuetion()
    {

       
       return this.http.get(this.uri);
    }


    sendanswere(res:any)
    {
        debugger;
        return this.http.put(this.url,res,{responseType: 'text'});
    
    
    
    
    }

    getcsharpQuetion()
    {

       
       return this.http.get(this.csharpurl);
    }


    sendcsharpanswere(response:any)
    {
        debugger;
        return this.http.put(this.charpput,response,{responseType: 'text'});
    
    
    
    
    }

}