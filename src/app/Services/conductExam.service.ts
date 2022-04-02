import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { QuestionDetails } from "../Model/QuestionDeails";




@Injectable()


export class ConductExamService{
   
    
    constructor(private http:HttpClient){

        
    }
    










        //level get url
     readonly uri = "http://localhost:21332/api/ConductExam/Level1";

            //student response put url
   readonly url="http://localhost:21332/api/ConductExam";


  

    getQuetion()
    {

       
       return this.http.get(this.uri);
    }


    sendanswere(queans:any)
    {
        debugger;
        return this.http.put(this.url,queans,{responseType: 'text'});
    
    
    
    
    }

   
   


    //for studentresponse
    sendAnsdata(ans:any)
    {
        debugger;
        const headers={'content-type':'application/json'}
        const body=JSON.stringify(ans);
        console.log(body)


       return this.http.post("http://localhost:21332/api/StudentAnswer",ans,{'headers': headers})
    
    }


}