import {Component, OnDestroy, OnInit} from '@angular/core';
import {HealthData} from "./models/HealthData";
import {ServerHealthService} from "./services/server-health.service";
import {interval, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy { // OnInit & OnDestroy needed for the interval implementation
  private readonly onDestroySubject = new Subject<void>();

  title = 'webapp';
  public data: HealthData | null; // last data from server
  public log: HealthData[] = [] // all previous data
  constructor(private service: ServerHealthService) {
    this.data = null;
  }

  ngOnInit() { // starting the interval
    interval(5000)
      .pipe(
        takeUntil(this.onDestroySubject)
      )
      .subscribe(() => {
        this.loadData();
      });
  }

  ngOnDestroy() { // stopping the interval
    this.onDestroySubject.next();
    this.onDestroySubject.complete();
  }

  /**
   * Gets and stores the current data using the ServerHealthService
   */
  public loadData() {
    this.service.getServerHealth().subscribe((res:any) => {
      this.data = res;
      this.data!.freeMemory /= 1024*1024;
      this.data!.totalMemory /= 1024*1024;
      this.data!.uptime /= 60;

      this.log.push(this.data!);
    });
  }


}
