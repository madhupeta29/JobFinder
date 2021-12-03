import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from 'src/app/service/job.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  constructor(private router: Router,private fb: FormBuilder, private registerService: RegisterService, private j: JobService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ["",[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), Validators.required]],
      password: ['', [Validators.required,  Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]],
     
    })
  }
  
  navigateByUrl(){

    this.router.navigateByUrl('login/register');
  }
  onlogin(){
    this.registerService.login(this.loginForm.value).subscribe(res =>{
      console.log(res);
      localStorage.setItem("user", JSON.stringify(res));
      const url = res.user.isEmployee == 'employee' ? 'employee': 'employeer';
      this.j.getJobsData().subscribe(res =>{
        this.j.setJobs(res.jobs);
      });
      this.router.navigateByUrl(url);
    });
   
  }

}
