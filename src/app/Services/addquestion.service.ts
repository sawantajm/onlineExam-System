import{ Injectable } from "@angular/core";
import{HttpClient} from "@angular/common/http";



@Injectable()

export class AddQuesionService
{
    constructor(private http:HttpClient)
    {

    }

   
//for question
    readonly url="http://localhost:21332/api/AddQuestion";

/*

readonly uri="http://localhost:21332/api/Subjects";



    getlevel()
    {
        debugger;
        return this.http.get(this.uri);
    }


    getsubject(levelId: number) {
        
        debugger;
        return this.http.get(`${this.uri}subject/${levelId}`);
      }

*/
getquestion()
{
    return this.http.get(this.url);
}






 InsertRecord(que:any)
        {
            
           
        
            
        return this.http.post("http://localhost:21332/api/AddQuestion/AddRoute",que,{responseType: 'text'});
        }
}