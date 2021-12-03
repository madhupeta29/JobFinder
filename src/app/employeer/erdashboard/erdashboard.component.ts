import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-erdashboard',
  templateUrl: './erdashboard.component.html',
  styleUrls: ['./erdashboard.component.css']
})
export class ErdashboardComponent implements OnInit {
  jobs: any;
  key: any;
  jobForm : any;
  constructor(private j: JobService, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.jobForm  = this.fb.group({
      jobTitle: ['', Validators.required],
      techStcok:['', Validators.required],
      jobDescription: [''],
    });

     this.j.getjobs().subscribe(jobs => {
       console.log(jobs);
       this.jobs = jobs;
     })
  }

  onEdit(){

  }
  clear(){
    this.jobForm.reset();
  }
  onPost(){
    console.log(this.jobForm?.value);
    let max: number = 0;
      this.jobs.forEach((job: { id: number; }) => {
        if (job.id > max) {
          max = job.id;
        }
      });
      console.log(max);
      let obj = JSON.parse(JSON.stringify(this.jobForm.value));
      obj['id'] = max+1;
      this.jobs.push(obj);
      this.j.setJobs(this.jobs);
      alert("Job Created succefully");
      this.jobForm.reset()

  }
  onTrash(index: any){
    this.jobs.splice(index, 1);
    alert("Job Deleted succefully");
    this.j.setJobs(this.jobs);
  }
 
}
