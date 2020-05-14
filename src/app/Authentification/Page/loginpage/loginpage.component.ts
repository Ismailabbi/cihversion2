import { Component, OnInit } from '@angular/core';
import {AuthentificationService}  from '../../Service/authentification.service'
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  returnUrl: any;
  username="salam"
  Password="salam"
  constructor(private authenticationService: AuthentificationService,  private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {

    this.authenticationService.logout();
    this.returnUrl =  '/';
  }
user
 ok(){

console.log(this.username)
console.log(this.Password)
  this.authenticationService.login('admin', 'admin')
            .pipe(first())
            .subscribe(
             
                data => {
                  console.log(data)
                  console.log(this.returnUrl)
                    this.router.navigate(['/']);
                },
                error => {
              
                });
    }
 }




