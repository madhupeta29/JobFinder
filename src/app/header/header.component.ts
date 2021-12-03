import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as data from '../../assets/menu.json'; 
import { RegisterService } from '../services/register.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedin: boolean = false;
  userData: any;
  data : any = '';
  constructor(private r: Router, private l: RegisterService) { }
   menuArray: any = (data as any).default;
  ngOnInit(): void {
   
    const usr = localStorage.getItem('user');
    this.isLoggedin = usr ? true : false;
    this.l.getData().subscribe(res =>{
      console.log(res);
      this.data = localStorage.getItem('user');
      this.userData = JSON.parse(this.data).user;
      this.isLoggedin = res;
    });
  }
  logout(){
    localStorage.clear();
    this.l.clearData();
    this.r.navigateByUrl('login');
  }
}
