import {CpuUsage} from "./CpuUsage";

export class HealthData {
  public cpuUsage: CpuUsage;
  public freeMemory: number;
  public totalMemory: number;
  public uptime: number;


  constructor(cpuUsage: CpuUsage, freeMemory: number, totalMemory: number, uptime: number) {
    this.cpuUsage = cpuUsage;
    this.freeMemory = freeMemory;
    this.totalMemory = totalMemory;
    this.uptime = uptime;
  }
}
