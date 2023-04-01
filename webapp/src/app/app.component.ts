import { Component } from '@angular/core';
import {HealthData} from "./models/HealthData";
import {ServerHealthService} from "./services/server-health.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webapp';
  public data: HealthData | null;
  constructor(private service: ServerHealthService) {
    this.data = null;
  }

  public loadData() {
    this.service.getServerHealth().subscribe((res:any) => {
      this.data = res;
      this.data!.freeMemory /= 1024*1024;
      this.data!.totalMemory /= 1024*1024;
      this.data!.uptime /= 60;
    });
  }


}
