import{ Injectable } from "@angular/core";
import{HttpClient} from "@angular/common/http";



@Injectable()

export class DeleteQuestionService
{
    constructor(private http:HttpClient)
    {

    }

   
//for get questions
    readonly url="http://localhost:21332/api/DeleteQuestion/";


//for delete Question

readonly uri="http://localhost:21332/api/DeleteQuestion";
    

    

   
getquestion()
{
    return this.http.get(this.url);
}


searchquestion()

{
    return this.http.get(this.url);
}



deleteQuestion(cid:number)
{
   return this.http.delete(this.uri+'/'+cid);
}


}