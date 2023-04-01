export class CpuUsage {
  public user: number;
  public system: number;


  constructor(user: number, system: number) {
    this.user = user;
    this.system = system;
  }
}
