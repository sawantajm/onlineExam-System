import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { searchstudent } from "../Model/SearchStudent.model";




@Injectable()


export class SearchStudentService
{
    sstudent?:searchstudent;
    constructor(private http:HttpClient)
    {

    }


     readonly uri = "http://localhost:21332/api/SearchStudent";


   
    
    searchStudent(sstudent:{})
    {
debugger;
       
       return this.http.post("http://localhost:21332/api/SearchStudent",sstudent,{responseType:'text'});
            }
        getinfo()
        {
            return this.http.get(this.uri);
        }

}