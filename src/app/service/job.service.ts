import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  jobsBS = new BehaviorSubject<any>('');

  constructor(private http: HttpClient) { }
  getJobsData(): Observable<any>{
    return this.http.get('../../assets/jobs.json');
  }
  setJobs(data: any){
    this.jobsBS.next(data);
  }
  getjobs(){
    return this.jobsBS;
  }
}
