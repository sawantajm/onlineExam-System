import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public loginuservariable?:boolean;
   public dologoff()
    {
        debugger;
        sessionStorage.clear();
        this.loginuservariable=false;
        window.alert("Logout Succefully");
       this.router.navigate(['/home']);
    }
}
