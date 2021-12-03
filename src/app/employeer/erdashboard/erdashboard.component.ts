import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-erdashboard',
  templateUrl: './erdashboard.component.html',
  styleUrls: ['./erdashboard.component.css']
})
export class ErdashboardComponent implements OnInit {
  jobs: any;
  constructor(private j: JobService) { }

  ngOnInit(): void {
    
    this.j.getJobsData().subscribe(res =>{
      this.j.setJobs(res.jobs);
     });
 
     this.j.getjobs().subscribe(jobs => {
       this.jobs = jobs;
     })
  }

}
