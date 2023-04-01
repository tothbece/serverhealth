import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {HealthData} from "../models/HealthData";

const API = environment.apiEndpoint + "/status"

@Injectable({
  providedIn: 'root'
})
export class ServerHealthService {

  constructor(private http: HttpClient) {
  }

  /**
   * Returns an observable JSON object with the current server status.
   */
  getServerHealth() {
    return this.http.get(API);
  }
}
