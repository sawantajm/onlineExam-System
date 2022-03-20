import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";




@Injectable()


export class SearchStudentService
{
    constructor(private http:HttpClient)
    {

    }


     readonly uri = "http://localhost:51137/api/SearchStudent";


   
    
    searchStudent()
    {

       
       return this.http.get(this.uri);
    }


}