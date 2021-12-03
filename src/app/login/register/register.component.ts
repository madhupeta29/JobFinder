import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : any;
  constructor(private router: Router, private fb : FormBuilder, private regiserService: RegisterService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      lastName:['', [Validators.required]],
      userName:['', [Validators.required]],
      email: ["",[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), Validators.required]],
      password: ['', [Validators.required,  Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]],
      confirmpassword: ['', [Validators.required]],
      isEmployee: ['', [Validators.required]]
    }, {validator: this.passwordMatchValidator})
  }

  passwordMatchValidator(frm: FormGroup) {
    return frm.controls['password'].value === frm.controls['confirmpassword'].value ? null : {'mismatch': true};
  }
  navigateByUrl(){
    this.router.navigateByUrl('login');
  }
  save(){
    console.log(this.registerForm.value);
    this.regiserService.registerUser(this.registerForm.value).subscribe(res => {
      console.log(res);
      alert("user created succefully");
      this.registerForm.reset();
    })

  }

}
