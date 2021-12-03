import { Component, OnInit } from '@angular/core';
import { JobService } from './service/job.service';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private j: JobService, private r: RegisterService){

  }
  title = 'jobfinder';
  ngOnInit(){
    this.j.getJobsData().subscribe(res =>{
      this.j.setJobs(res.jobs);
    });
    if (localStorage.getItem('user')) {
      this.r.setData("islogdIn");
    }

  }
 

}
