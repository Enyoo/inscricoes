import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(f: NgForm) {
    console.table(f.value);
    if(f.value.login == 'enyo'){
      this.router.navigate(['/coordenacao']);
    }

    if(f.value.login == f.value.senha){
      this.router.navigate(['/aluno']);
    }
  }

}
