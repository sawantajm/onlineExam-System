import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";




@Injectable()


export class ConductExamService{
    constructor(private http:HttpClient){

    }

        //level get url
     readonly uri = "http://localhost:21332/api/ConductExam/Level1";

            //student response put url
   readonly url="http://localhost:21332/api/ConductExam";


   readonly csharpurl="http://localhost:21332/api/CSharpExam/charp1";
   readonly charpput="http://localhost:21332/api/CSharpExam";

    
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