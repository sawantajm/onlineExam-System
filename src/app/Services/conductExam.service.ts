import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";




@Injectable()


export class ConductExamService{
    constructor(private http:HttpClient){

    }


     readonly uri = "http://localhost:51137/Exam/Level1";


    
    getQuetion()
    {

       
       return this.http.get(this.uri);
    }
}