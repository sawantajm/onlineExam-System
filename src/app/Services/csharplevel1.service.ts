import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { QuestionDetails } from "../Model/QuestionDeails";




@Injectable()


export class csharplevelIExamService{
   
    
    constructor(private http:HttpClient){

        
    }
    

    
   readonly csharpurl="http://localhost:21332/api/CSharpExam/charp1";
   readonly charpput="http://localhost:21332/api/CSharpExam";


   getcsharpQuetion()
   {

      
      return this.http.get(this.csharpurl);
   }

   sendAnsdata(ans:any=[])
   {
       debugger;
      // const headers={'content-type':'application/json'}
      // const body=JSON.stringify(ans);
      // console.log(body)


      return this.http.post("http://localhost:21332/api/StudentAnswer",ans,{responseType :'text'})
   
   }


}