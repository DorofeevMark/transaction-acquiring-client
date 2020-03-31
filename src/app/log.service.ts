import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private httpService: HttpClient) { }

  public getLogs() {
    return this.httpService.get(environment.apiUrl + 'getLogs');
  }
}
